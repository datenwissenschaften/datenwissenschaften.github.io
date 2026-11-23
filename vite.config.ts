import { renameSync, rmSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import 'vite-ssg'
import { locales, pageAlternates, pages, pageUrl, SITE_URL, type PageKey } from './src/i18n'

const pageKeys = Object.keys(pages) as PageKey[]
const pagePaths = pageKeys.flatMap((page) => locales.map((locale) => pages[page][locale]))

function sitemap() {
  const urls = pageKeys.flatMap((page) =>
    locales.map((locale) => {
      const alternates = pageAlternates(page)
        .map(({ language, href }) => `    <xhtml:link rel="alternate" hreflang="${language}" href="${href}"/>`)
        .join('\n')
      return `  <url>\n    <loc>${pageUrl(page, locale)}</loc>\n${alternates}\n  </url>`
    }),
  )
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`
}

export default defineConfig({
  plugins: [vue()],
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
