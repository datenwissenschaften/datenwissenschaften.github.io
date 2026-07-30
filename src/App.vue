<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'

const route = useRoute()
const menuOpen = ref(false)
const theme = ref<'dark' | 'light'>('dark')

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
      <RouterLink to="/" class="brand" aria-label="Dr. Franke home">
        <span class="brand-mark">df</span>
        <span class="brand-name">Dr. Franke<br /><b>Datenwissenschaften</b></span>
      </RouterLink>

      <nav :class="{ open: menuOpen }" aria-label="Main navigation">
        <RouterLink to="/services">Services</RouterLink>
        <RouterLink to="/work">Work</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>

      <div class="header-actions">
        <button class="theme-toggle" type="button" :aria-label="`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`" @click="toggleTheme">
          <span class="sun">☼</span><span class="toggle-track"><i /></span><span class="moon">◐</span>
        </button>
        <button class="menu-toggle" type="button" aria-label="Toggle navigation" :aria-expanded="menuOpen" @click="menuOpen = !menuOpen">
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
        <RouterLink to="/" class="footer-brand">Dr. Franke <span>/ Datenwissenschaften</span></RouterLink>
        <p>Lean systems. Useful intelligence.<br />Built to keep working.</p>
      </div>
      <div class="footer-nav">
        <p class="eyebrow">Navigate</p>
        <RouterLink to="/services">Services</RouterLink>
        <RouterLink to="/work">Work</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </div>
      <div class="footer-nav">
        <p class="eyebrow">Connect</p>
        <a href="mailto:martin.franke@datenwissenschaften.com">Email</a>
        <RouterLink to="/contact">Book a call</RouterLink>
        <RouterLink to="/imprint">Imprint & privacy</RouterLink>
      </div>
      <div class="footer-bottom">
        <span>© {{ new Date().getFullYear() }} Dr. Franke Datenwissenschaften OÜ</span>
        <span>Estonia · Working globally</span>
      </div>
    </footer>
  </div>
</template>
