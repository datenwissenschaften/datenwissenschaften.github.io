import { ViteSSG } from 'vite-ssg'
import '@fontsource-variable/dm-sans'
import '@fontsource-variable/manrope'
import App from './App.vue'
import { routes, scrollBehavior } from './router'
import './styles/index.scss'

// Prerendered at build time (one HTML file per route), hydrated in the browser.
export const createApp = ViteSSG(App, { routes, scrollBehavior })
