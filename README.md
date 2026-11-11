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
```

## Structure

- `src/i18n.ts`: locales and the URL of every page per locale (English at `/…`, German at `/de/…`).
- `src/content/*.ts`: page copy as `{ en, de }`; the German object is typed against the English one.
- `src/seo.ts`: per-page title, description, canonical, hreflang, Open Graph and JSON-LD.
- `vite.config.ts`: prerenders every route to `dist/<path>/index.html`, writes `dist/404.html`
  and `dist/sitemap.xml`.

## Deployment

Pushes to `main` build in GitHub Actions and deploy to the Dokku app `datenwissenschaften`.
Dokku builds the `Dockerfile`, which serves `dist/` with nginx (`nginx.conf`,
`security-headers.conf`): a 200 for every prerendered page, a real 404 otherwise, and
security headers. `scripts/csp-hash.mjs` adds the hash of the inline theme script to the CSP.
