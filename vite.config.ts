import { renameSync, rmSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import 'vite-ssg'
import { locales, pages, SITE_URL, type PageKey } from './src/i18n'

const pageKeys = Object.keys(pages) as PageKey[]

function sitemap() {
  const urls = pageKeys.flatMap((page) =>
    locales.map((locale) => {
      const alternates = locales
        .map((value) => `    <xhtml:link rel="alternate" hreflang="${value}" href="${SITE_URL}${pages[page][value]}"/>`)
        .concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}${pages[page].en}"/>`)
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
    includedRoutes: () => [...pageKeys.flatMap((page) => locales.map((locale) => pages[page][locale])), '/404'],
    onFinished() {
      const dist = fileURLToPath(new URL('./dist', import.meta.url))
      // nginx serves this file with a real 404 status for unknown URLs.
      renameSync(resolve(dist, '404/index.html'), resolve(dist, '404.html'))
      rmSync(resolve(dist, '404'), { recursive: true })
      writeFileSync(resolve(dist, 'sitemap.xml'), sitemap())
    },
  },
})
