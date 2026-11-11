<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { computed, onMounted, ref, watch } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import footerLogo from './assets/img/logo-white.webp'
import headerLogo from './assets/img/logo.webp'
import headerWordmark from './assets/img/logo-white-text.webp'
import siteContent, { EMAIL } from './content/site'
import { useContent, useLocale } from './i18n'
import { notFoundHead, pageHead } from './seo'

const route = useRoute()
const { locale, pageKey, path, alternatePath } = useLocale()
const site = useContent(siteContent)
const menuOpen = ref(false)
const theme = ref<'dark' | 'light'>('dark')

useHead(computed(() => (pageKey.value ? pageHead(pageKey.value, locale.value) : notFoundHead(locale.value))))

const otherLocale = computed(() => (locale.value === 'en' ? 'de' : 'en'))

const applyTheme = (value: 'dark' | 'light') => {
  document.documentElement.dataset.theme = value
  document.documentElement.style.colorScheme = value
}

onMounted(() => {
  const saved = localStorage.getItem('dw-theme') as 'dark' | 'light' | null
  theme.value = saved ?? (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')
  applyTheme(theme.value)
})

watch(route, () => {
  menuOpen.value = false
})

function toggleTheme() {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
  localStorage.setItem('dw-theme', theme.value)
  applyTheme(theme.value)
}
</script>

<template>
  <div class="site-shell">
    <header class="site-header">
      <RouterLink :to="path('home')" class="brand" :aria-label="site.homeLabel">
        <img class="header-logo" :src="headerLogo" alt="" width="46" height="46" />
        <img class="header-wordmark" :src="headerWordmark" alt="" width="974" height="82" />
      </RouterLink>

      <nav :class="{ open: menuOpen }" :aria-label="site.nav.label">
        <RouterLink :to="path('services')">{{ site.nav.services }}</RouterLink>
        <RouterLink :to="path('work')">{{ site.nav.work }}</RouterLink>
        <RouterLink :to="path('about')">{{ site.nav.about }}</RouterLink>
        <RouterLink :to="path('contact')">{{ site.nav.contact }}</RouterLink>
        <RouterLink :to="path('case-study')">{{ site.nav.caseStudy }}</RouterLink>
        <RouterLink :to="path('products')">{{ site.nav.products }}</RouterLink>
        <RouterLink :to="path('locations')">{{ site.nav.locations }}</RouterLink>
      </nav>

      <div class="header-actions">
        <RouterLink
          :to="alternatePath(otherLocale)"
          class="language-switch"
          :hreflang="otherLocale"
          :lang="otherLocale"
          :aria-label="site.languageSwitch.aria"
        >{{ site.languageSwitch.short }}</RouterLink>
        <button
          class="theme-toggle"
          type="button"
          :aria-label="site.switchTheme(theme === 'dark' ? site.themeNames.light : site.themeNames.dark)"
          @click="toggleTheme"
        >
          <span class="sun">☼</span><span class="toggle-track"><i /></span><span class="moon">◐</span>
        </button>
        <button class="menu-toggle" type="button" :aria-label="site.toggleNav" :aria-expanded="menuOpen" @click="menuOpen = !menuOpen">
          <span /><span />
        </button>
      </div>
    </header>

    <main>
      <RouterView v-slot="{ Component }">
        <Transition name="page" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>

    <footer class="site-footer">
      <div>
        <RouterLink :to="path('home')" class="footer-brand" :aria-label="site.homeLabel">
          <img class="footer-logo" :src="footerLogo" :alt="site.brandName" width="230" height="136" loading="lazy" />
        </RouterLink>
        <p>{{ site.footer.tagline[0] }}<br />{{ site.footer.tagline[1] }}</p>
      </div>
      <div class="footer-nav">
        <p class="eyebrow">{{ site.footer.navigate }}</p>
        <RouterLink :to="path('services')">{{ site.nav.services }}</RouterLink>
        <RouterLink :to="path('work')">{{ site.nav.work }}</RouterLink>
        <RouterLink :to="path('about')">{{ site.nav.about }}</RouterLink>
        <RouterLink :to="path('products')">{{ site.nav.products }}</RouterLink>
        <RouterLink :to="path('locations')">{{ site.nav.locations }}</RouterLink>
        <RouterLink :to="path('case-study')">{{ site.nav.caseStudy }}</RouterLink>
      </div>
      <div class="footer-nav">
        <p class="eyebrow">{{ site.footer.connect }}</p>
        <a :href="`mailto:${EMAIL}`">{{ site.footer.email }}</a>
        <RouterLink :to="path('contact')">{{ site.footer.bookCall }}</RouterLink>
        <RouterLink :to="path('imprint')">{{ site.footer.imprint }}</RouterLink>
        <RouterLink :to="alternatePath(otherLocale)" :hreflang="otherLocale" :lang="otherLocale">{{ site.languageSwitch.label }}</RouterLink>
      </div>
      <div class="footer-bottom">
        <span>© {{ new Date().getFullYear() }} Dr. Franke Datenwissenschaften OÜ</span>
        <span>{{ site.footer.locations }}</span>
      </div>
    </footer>
  </div>
</template>
