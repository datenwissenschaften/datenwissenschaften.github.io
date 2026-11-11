// Writes the CSP hash of every inline <script> in the prerendered pages into
// the nginx security headers, so the policy can stay free of 'unsafe-inline'.
import { createHash } from 'node:crypto'
import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const [distDir, headersFile] = process.argv.slice(2)

const htmlFiles = (dir) =>
  readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name)
    if (entry.isDirectory()) return htmlFiles(path)
    return entry.name.endsWith('.html') ? [path] : []
  })

const hashes = new Set()
for (const file of htmlFiles(distDir)) {
  const html = readFileSync(file, 'utf8')
  for (const [, attributes, body] of html.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/g)) {
    if (/\bsrc=/.test(attributes) || /type="application\/ld\+json"/.test(attributes) || !body.trim()) continue
    hashes.add(`'sha256-${createHash('sha256').update(body).digest('base64')}'`)
  }
}

if (hashes.size === 0) throw new Error('No inline scripts found; is the theme script still in index.html?')
const headers = readFileSync(headersFile, 'utf8').replace("'THEME_SCRIPT_HASH'", [...hashes].join(' '))
writeFileSync(headersFile, headers)
console.log(`CSP: ${hashes.size} inline script hash(es) written`)
