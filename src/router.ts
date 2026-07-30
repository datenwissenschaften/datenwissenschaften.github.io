import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(_to, _from, savedPosition) {
    return savedPosition ?? { top: 0, behavior: 'smooth' }
  },
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/services', name: 'services', component: () => import('./views/ServicesView.vue') },
    { path: '/work', name: 'work', component: () => import('./views/WorkView.vue') },
    { path: '/about', name: 'about', component: () => import('./views/AboutView.vue') },
    { path: '/contact', name: 'contact', component: () => import('./views/ContactView.vue') },
    { path: '/case-study', name: 'case-study', component: () => import('./views/CaseStudyView.vue') },
    { path: '/imprint', name: 'imprint', component: () => import('./views/ImprintView.vue') },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
})

router.afterEach((to) => {
  const labels: Record<string, string> = {
    home: 'Data Science Consultant',
    services: 'Services',
    work: 'Selected Work',
    'case-study': 'Public Case Study',
    about: 'About',
    contact: 'Start a Project',
    imprint: 'Imprint & Privacy',
  }
  document.title = `${labels[String(to.name)] ?? 'Data Science Consultant'} — Dr. Franke Datenwissenschaften`
})

export default router
