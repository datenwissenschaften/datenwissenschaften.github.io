import { SITE_URL } from './i18n'

export interface Post {
  slug: string
  title: string
  description: string
  date: string
  tags: string[]
  cover: string
  coverAlt: string
  html: string
}

export const BLOG_PATH = '/blog'
export const BLOG_TITLE = 'Engineering notes | Dr. Franke Datenwissenschaften'
export const BLOG_DESCRIPTION =
  'Technical articles on data platforms, reinforcement learning and AI agents in production, with numbers from running systems.'
export const FEED_PATH = `${BLOG_PATH}/rss.xml`

export const postPath = (slug: string) => `${BLOG_PATH}/${slug}`
export const blogUrl = (path: string) => `${SITE_URL}${path}`
export const postDate = (date: string) =>
  new Date(`${date}T00:00:00Z`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })
