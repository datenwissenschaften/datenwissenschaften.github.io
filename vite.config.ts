import { renameSync, rmSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import 'vite-ssg'
import { locales, pages, SITE_URL, type PageKey } from './src/i18n'

const pageKeys = Object.keys(pages) as PageKey[]

// The root redirects by browser language, so it is the x-default for the homepage.
const xDefaultUrl = (page: PageKey) => (page === 'home' ? `${SITE_URL}/` : `${SITE_URL}${pages[page].en}`)

function sitemap() {
  const urls = pageKeys.flatMap((page) =>
    locales.map((locale) => {
      const alternates = locales
        .map((value) => `    <xhtml:link rel="alternate" hreflang="${value}" href="${SITE_URL}${pages[page][value]}"/>`)
        .concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${xDefaultUrl(page)}"/>`)
        .join('\n')
      return `  <url>\n    <loc>${SITE_URL}${pages[page][locale]}</loc>\n${alternates}\n  </url>`
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
    includedRoutes: () => [...pageKeys.flatMap((page) => locales.map((locale) => pages[page][locale])), '/404', '/de/404'],
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
    },
  },
})
