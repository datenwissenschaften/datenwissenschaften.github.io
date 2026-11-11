<script setup lang="ts">
import { RouterLink } from 'vue-router'
import ArrowIcon from '../components/ArrowIcon.vue'
import PageIntro from '../components/PageIntro.vue'
import siteContent from '../content/site'
import { useContent, useLocale } from '../i18n'

const { path } = useLocale()
const site = useContent(siteContent)
</script>

<template>
  <div>
    <PageIntro :title="site.notFound.title" :accent="site.notFound.accent" :copy="site.notFound.copy">
      <template #eyebrow>{{ site.notFound.eyebrow }}</template>
    </PageIntro>
    <section class="inline-cta wrap">
      <nav class="not-found-links" :aria-label="site.nav.label">
        <RouterLink :to="path('services')">{{ site.nav.services }}</RouterLink>
        <RouterLink :to="path('work')">{{ site.nav.work }}</RouterLink>
        <RouterLink :to="path('about')">{{ site.nav.about }}</RouterLink>
        <RouterLink :to="path('contact')">{{ site.nav.contact }}</RouterLink>
      </nav>
      <RouterLink :to="path('home')" class="button button-primary">{{ site.notFound.home }} <ArrowIcon /></RouterLink>
    </section>
  </div>
</template>
