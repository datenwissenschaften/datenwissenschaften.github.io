# Dr. Franke Datenwissenschaften

Multi-page consultancy website in English and German, built with Vue 3, TypeScript,
Vue Router and Vite, and prerendered to static HTML with vite-ssg.

## Development

```bash
npm install
npm run dev
```

## Quality checks

```bash
npm run lint
npm run build
npm run check:seo
```

## Structure

- `src/i18n.ts` defines the canonical English (`/en`) and German (`/de`) routes and their language alternates.
- `src/content/*.ts`: page copy as `{ en, de }`; the German object is typed against the English one.
- `src/seo.ts` renders page metadata, Open Graph tags and the organization, person and service schema.
  Pages with collections render their own JSON-LD alongside it.
- `vite.config.ts` prerenders the pages and localized 404s. It generates `sitemap.xml`,
  `robots.txt` and the nginx path map from the site configuration.

## Blog

`/blog` is an English engineering blog. A post is `src/content/blog/<slug>.md` with front matter (`title`,
`description`, `date` as YYYY-MM-DD, `tags`, `cover`, `coverAlt`) and its images in `public/blog/<slug>/`, referenced
as `/blog/<slug>/<file>`. Headings start at `##`, since the title is the page's H1. The build renders the Markdown
(raw HTML off), prerenders the index and every post with `BlogPosting` JSON-LD, adds them to the sitemap and writes
`/blog/rss.xml`. Without a post there is no blog page, nav link or feed. Approved articles arrive as commits from the
Retro Speedlab backend after the owner's approval in Discord.

## SEO audits

`npm run check:seo` checks the built HTML in CI, including sitemap coverage, reciprocal
language links, page metadata, JSON-LD, internal links and 404 indexing directives.
`public/llms.txt` is a short bilingual reference with links to project evidence and common
questions. Both search and training crawlers are allowed by the existing robots policy.

After deployment, check the live sitemap and URL inspection reports in Google Search Console
and Bing Webmaster Tools. Search Console also reports Core Web Vitals once field data is
available. [Google Search Console documentation](https://developers.google.com/search/docs/monitor-debug/search-console-start) ·
[Bing sitemap documentation](https://www.bing.com/webmasters/help/sitemaps-3b5cf6ed)

The [claude-seo](https://github.com/AgriciDaniel/claude-seo) plugin for Claude Code can also
audit the live site.

```text
/plugin marketplace add AgriciDaniel/claude-seo
/plugin install claude-seo@agricidaniel-claude-seo
/seo setup                                          # once: isolated Python runtime + Chromium
/seo audit https://www.datenwissenschaften.com      # full audit with a 0–100 health score
```

Narrower commands such as `/seo technical`, `/seo content`, `/seo schema`, `/seo geo` and
`/seo page <url>` cover single areas. After a deploy, `/seo drift baseline <url>` records the
current state and `/seo drift compare <url>` reports regressions against it.

## Deployment

Pushes to `main` build in GitHub Actions and deploy to the Dokku app `datenwissenschaften`.
Dokku builds the `Dockerfile`, which serves `dist/` with nginx and loads the generated map
from the nginx configuration directory. Canonical pages return 200. Known duplicate and legacy
URLs redirect permanently, and missing pages return a localized 404. The root chooses the
language from the visitor's cookie or browser preference. `scripts/csp-hash.mjs` adds the
hash of the inline theme script to the CSP.
