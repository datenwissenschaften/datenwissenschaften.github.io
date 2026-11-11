import type { RouteRecordRaw, RouterScrollBehavior } from 'vue-router'
import { locales, pages, type PageKey } from './i18n'
import HomeView from './views/HomeView.vue'

const views = {
  home: HomeView,
  services: () => import('./views/ServicesView.vue'),
  work: () => import('./views/WorkView.vue'),
  about: () => import('./views/AboutView.vue'),
  contact: () => import('./views/ContactView.vue'),
  'case-study': () => import('./views/CaseStudyView.vue'),
  products: () => import('./views/ProductsView.vue'),
  imprint: () => import('./views/ImprintView.vue'),
} satisfies Record<PageKey, unknown>

const NotFoundView = () => import('./views/NotFoundView.vue')

export const routes: RouteRecordRaw[] = [
  ...(Object.keys(pages) as PageKey[]).flatMap((page) =>
    locales.map((locale) => ({
      path: pages[page][locale],
      name: `${page}-${locale}`,
      component: views[page],
      meta: { page, locale },
    })),
  ),
  // Prerendered to 404.html and de/404.html; nginx serves them with a real 404 status.
  { path: '/404', name: 'not-found', component: NotFoundView, meta: { locale: 'en' } },
  { path: '/de/404', name: 'not-found-de-page', component: NotFoundView, meta: { locale: 'de' } },
  { path: '/de/:pathMatch(.*)*', name: 'not-found-de', component: NotFoundView, meta: { locale: 'de' } },
  { path: '/:pathMatch(.*)*', name: 'not-found-catch-all', component: NotFoundView, meta: { locale: 'en' } },
]

export const scrollBehavior: RouterScrollBehavior = (to, _from, savedPosition) => {
  if (savedPosition) return savedPosition
  if (to.hash) {
    return new Promise((resolve) => {
      let attempts = 0

      const resolveWhenReady = () => {
        if (document.querySelector(to.hash)) {
          // The target mounts when the out-in page transition begins. Wait for
          // that entrance animation to finish so its transform cannot disrupt
          // the final scroll position.
          window.setTimeout(() => resolve({ el: to.hash, behavior: 'smooth' }), 230)
          return
        }

        attempts += 1
        if (attempts < 120) {
          window.requestAnimationFrame(resolveWhenReady)
          return
        }

        resolve({ top: 0 })
      }

      window.requestAnimationFrame(resolveWhenReady)
    })
  }
  return { top: 0, behavior: 'smooth' }
}
