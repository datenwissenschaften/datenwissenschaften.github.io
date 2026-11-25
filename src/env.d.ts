/// <reference types="vite/client" />

declare const __BLOG_LIVE__: boolean

declare module 'virtual:blog' {
  const posts: import('./blog').Post[]
  export default posts
}
