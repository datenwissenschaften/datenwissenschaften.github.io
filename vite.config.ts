import { renameSync, rmSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig, type Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import 'vite-ssg'
import { loadPosts, rss } from './scripts/blog'
import { BLOG_PATH, blogUrl, FEED_PATH, postPath } from './src/blog'
import { locales, pageAlternates, pages, pageUrl, SITE_URL, type PageKey } from './src/i18n'

const BLOG_MODULE = 'virtual:blog'
const RESOLVED_BLOG_MODULE = `\0${BLOG_MODULE}`
const pageKeys = Object.keys(pages) as PageKey[]
const posts = loadPosts()
// The blog goes live with its first post.
const blogPaths = posts.length ? [BLOG_PATH, ...posts.map((post) => postPath(post.slug))] : []
const pagePaths = [...pageKeys.flatMap((page) => locales.map((locale) => pages[page][locale])), ...blogPaths]

// Markdown is rendered at build time, so the browser bundle carries only the finished posts.
// shortcut: every post's HTML ships in one lazy chunk; split it per post once that chunk passes ~500 kB.
function blog(): Plugin {
  return {
    name: 'blog',
    resolveId: (id) => (id === BLOG_MODULE ? RESOLVED_BLOG_MODULE : undefined),
    load: (id) => (id === RESOLVED_BLOG_MODULE ? `export default ${JSON.stringify(posts)}` : undefined),
  }
}

function sitemap() {
  const urls = pageKeys.flatMap((page) =>
    locales.map((locale) => {
      const alternates = pageAlternates(page)
        .map(({ language, href }) => `    <xhtml:link rel="alternate" hreflang="${language}" href="${href}"/>`)
        .join('\n')
      return `  <url>\n    <loc>${pageUrl(page, locale)}</loc>\n${alternates}\n  </url>`
    }),
  )
  const blogUrls = blogPaths.map((path) => `  <url>\n    <loc>${blogUrl(path)}</loc>\n  </url>`)
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${[...urls, ...blogUrls].join('\n')}
</urlset>
`
}

export default defineConfig({
  plugins: [vue(), blog()],
  define: { __BLOG_LIVE__: JSON.stringify(posts.length > 0) },
  server: {
    watch: {
      // Avoid exhausting Linux's per-user inotify instance limit.
      usePolling: true,
      interval: 250,
    },
  },
  ssgOptions: {
    dirStyle: 'nested',
    includedRoutes: () => [...pagePaths, '/404', '/de/404'],
    onFinished() {
      const dist = fileURLToPath(new URL('./dist', import.meta.url))
      // nginx serves these files with a real 404 status for unknown URLs.
      for (const dir of ['404', 'de/404']) {
        renameSync(resolve(dist, dir, 'index.html'), resolve(dist, `${dir}.html`))
        rmSync(resolve(dist, dir), { recursive: true })
      }
      // The root redirects by language (nginx.conf); the bare app shell is never served.
      rmSync(resolve(dist, 'index.html'))
      writeFileSync(resolve(dist, 'sitemap.xml'), sitemap())
      if (posts.length) writeFileSync(resolve(dist, FEED_PATH.slice(1)), rss(posts))
      writeFileSync(
        resolve(dist, 'robots.txt'),
        `# All crawlers, including AI search and training crawlers, are welcome.\nUser-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`,
      )
      // Use the same paths for prerendering, indexing and nginx URL normalization.
      const redirects = pagePaths.flatMap((path) =>
        [path, `${path}/`, `${path}/index.html`].map((alias) => `${alias} ${path};`),
      )
      writeFileSync(resolve(dist, 'page-paths.map'), `${redirects.join('\n')}\n`)
    },
  },
})
