import assert from 'node:assert/strict'
import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

const dist = process.argv[2] ?? 'dist'
const read = (file) => readFileSync(join(dist, file), 'utf8')
const index = (url) => `${new URL(url).pathname.slice(1)}/index.html`
const alternates = (markup) => Object.fromEntries(
  [...markup.matchAll(/hreflang="([^"]+)" href="([^"]+)"/g)].map(([, lang, url]) => [lang, url]),
)

const sitemap = read('sitemap.xml')
const entries = [...sitemap.matchAll(/<url>\s*<loc>([^<]+)<\/loc>([\s\S]*?)<\/url>/g)]
const urls = new Set(entries.map(([, url]) => url))
const titles = new Set()
const descriptions = new Set()
assert(urls.size > 0, 'The sitemap is empty')
assert.equal(urls.size, entries.length, 'Duplicate sitemap entry')

for (const [, url, sitemapLinks] of entries) {
  const html = read(index(url))
  const lang = new URL(url).pathname.split('/')[1]
  const head = html.split('</head>')[0]
  const links = alternates(head)
  assert.match(html, new RegExp(`<html lang="${lang}"`), url)
  assert.deepEqual([...head.matchAll(/<link rel="canonical" href="([^"]+)"/g)].map((m) => m[1]), [url])
  assert.deepEqual(links, alternates(sitemapLinks), url)
  assert.deepEqual(Object.keys(links).sort(), ['de', 'en', 'x-default'], url)
  assert.equal(links[lang], url)
  assert.equal(links['x-default'], links.en)
  for (const alternate of [links.en, links.de]) {
    assert(urls.has(alternate), alternate)
    assert.deepEqual(alternates(read(index(alternate)).split('</head>')[0]), links, alternate)
  }
  assert.equal([...html.matchAll(/<h1\b[^>]*>[^<]+/g)].length, 1, `Expected one visible H1 on ${url}`)
  assert.doesNotMatch(head, /noindex/i, url)
  const title = head.match(/<title>([^<]+)<\/title>/)?.[1]
  const description = head.match(/name="description" content="([^"]+)"/)?.[1]
  assert(title && !titles.has(title), `Missing or duplicate title on ${url}`)
  assert(description && !descriptions.has(description), `Missing or duplicate description on ${url}`)
  titles.add(title)
  descriptions.add(description)

  const image = head.match(/property="og:image" content="([^"]+)"/)?.[1]
  assert(image && existsSync(join(dist, new URL(image).pathname.slice(1))), `Missing social image on ${url}`)
  const schemas = [...head.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
    .flatMap(([, json]) => {
      const value = JSON.parse(json)
      return value['@graph'] ?? [value]
    })
  const page = schemas.find((schema) => schema['@id'] === `${url}#webpage`)
  assert.equal(page?.inLanguage, lang, `Missing localized page schema on ${url}`)
  if (page.mainEntity) {
    assert(schemas.some((schema) => schema['@id'] === page.mainEntity['@id']), `Unresolved mainEntity on ${url}`)
  }
}

function checkLinks(contents, base, links) {
  for (const [, href] of links) {
    const target = new URL(href, base)
    if (!urls.has(`${target.origin}${target.pathname}`)) {
      assert.notEqual(target.origin, new URL(base).origin, `Noncanonical link ${href} on ${base}`)
      continue
    }
    if (target.hash) {
      const html = target.pathname === new URL(base).pathname ? contents : read(index(target))
      assert(html.includes(`id="${target.hash.slice(1)}"`), `Missing link target ${href} on ${base}`)
    }
  }
}

for (const url of urls) {
  const html = read(index(url))
  checkLinks(html, url, html.matchAll(/<a\b[^>]*\bhref="((?:\/|#)[^"]+)"/g))
}

const site = new URL(entries[0][1]).origin
checkLinks('', `${site}/llms.txt`, read('llms.txt').matchAll(/\]\((https:\/\/[^)]+)\)/g))
assert(read('robots.txt').includes(`Sitemap: ${site}/sitemap.xml`), 'robots.txt must advertise the sitemap')
for (const file of ['404.html', 'de/404.html']) {
  const head = read(file).split('</head>')[0]
  assert.match(head, /name="robots" content="noindex"/, file)
  assert.doesNotMatch(head, /rel="canonical"|hreflang=|application\/ld\+json/, file)
}

const map = read('page-paths.map')
for (const url of urls) {
  const { pathname } = new URL(url)
  for (const alias of [pathname, `${pathname}/`, `${pathname}/index.html`]) {
    assert(map.split('\n').includes(`${alias} ${pathname};`), `Missing nginx mapping for ${alias}`)
  }
}
const prerendered = readdirSync(dist, { recursive: true })
  .filter((file) => file.split(/[\\/]/).at(-1) === 'index.html')
  .map((file) => file.replaceAll('\\', '/'))
assert.deepEqual(new Set(prerendered), new Set([...urls].map(index)), 'Sitemap coverage differs from prerendered pages')
console.log(`SEO checks passed for ${urls.size} canonical pages and 2 localized 404 pages.`)
