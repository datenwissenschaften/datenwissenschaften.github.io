import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { Feed } from 'feed'
import matter from 'gray-matter'
import MarkdownIt from 'markdown-it'
import { BLOG_DESCRIPTION, BLOG_PATH, BLOG_TITLE, blogUrl, FEED_PATH, postPath, type Post } from '../src/blog'

const POSTS_DIR = 'src/content/blog'
const PUBLIC_DIR = 'public'
const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/
const DATE = /^\d{4}-\d{2}-\d{2}$/
const FIELDS = ['title', 'description', 'date', 'tags', 'cover', 'coverAlt'] as const

const markdown = new MarkdownIt({ html: false, linkify: false, typographer: true })
markdown.renderer.rules.image = (tokens, index, options, env, self) => {
  tokens[index].attrSet('loading', 'lazy')
  tokens[index].attrSet('decoding', 'async')
  return self.renderToken(tokens, index, options)
}

function post(file: string): Post {
  const slug = file.replace(/\.md$/, '')
  const { data, content } = matter(readFileSync(join(POSTS_DIR, file), 'utf8'))
  const missing = FIELDS.filter((field) => !(field in data))
  if (!SLUG.test(slug)) throw new Error(`Blog post ${file} needs a lowercase, hyphenated file name`)
  if (missing.length) throw new Error(`Blog post ${file} misses ${missing.join(', ')}`)
  const date = data.date instanceof Date ? data.date.toISOString().slice(0, 10) : String(data.date)
  if (!DATE.test(date)) throw new Error(`Blog post ${file} needs a YYYY-MM-DD date`)
  if (!existsSync(join(PUBLIC_DIR, data.cover))) throw new Error(`Blog post ${file} has no cover at ${data.cover}`)
  const html = markdown.render(content)
  if (html.includes('<h1')) throw new Error(`Blog post ${file} must not have its own H1; the title is the H1`)
  return { slug, title: data.title, description: data.description, date, tags: data.tags, cover: data.cover, coverAlt: data.coverAlt, html }
}

export function loadPosts(): Post[] {
  const files = existsSync(POSTS_DIR) ? readdirSync(POSTS_DIR).filter((file) => file.endsWith('.md')) : []
  return files.map(post).sort((first, second) => second.date.localeCompare(first.date))
}

export function rss(posts: Post[]) {
  const feed = new Feed({
    title: BLOG_TITLE,
    description: BLOG_DESCRIPTION,
    id: blogUrl(BLOG_PATH),
    link: blogUrl(BLOG_PATH),
    language: 'en',
    copyright: 'Dr. Franke Datenwissenschaften OÜ',
    feedLinks: { rss: blogUrl(FEED_PATH) },
    updated: posts.length ? new Date(posts[0].date) : undefined,
  })
  for (const entry of posts) {
    feed.addItem({
      title: entry.title,
      id: blogUrl(postPath(entry.slug)),
      link: blogUrl(postPath(entry.slug)),
      description: entry.description,
      date: new Date(entry.date),
      image: blogUrl(entry.cover),
      category: entry.tags.map((name) => ({ name })),
    })
  }
  return feed.rss2()
}
