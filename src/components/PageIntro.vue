<script setup lang="ts">
import { RouterLink } from 'vue-router'
import siteContent from '../content/site'
import { useContent, useLocale } from '../i18n'
import { pageLabel } from '../seo'

const { locale, pageKey, path } = useLocale()
const site = useContent(siteContent)

defineProps<{
  title: string
  accent?: string
  copy: string
}>()
</script>

<template>
  <section class="page-intro wrap">
    <div>
      <nav v-if="pageKey" class="breadcrumbs" :aria-label="site.breadcrumb">
        <RouterLink :to="path('home')">{{ pageLabel('home', locale) }}</RouterLink>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{{ pageLabel(pageKey, locale) }}</span>
      </nav>
      <p v-else class="eyebrow"><slot name="eyebrow" /></p>
      <h1>{{ title }} <em v-if="accent">{{ accent }}</em></h1>
      <p class="page-lead">{{ copy }}</p>
    </div>
  </section>
</template>
