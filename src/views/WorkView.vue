<script setup lang="ts">
import { RouterLink } from 'vue-router'
import ArrowIcon from '../components/ArrowIcon.vue'
import PageIntro from '../components/PageIntro.vue'
import dataContent from '../content/data'
import workContent from '../content/work'
import { SITE_URL, useContent, useLocale } from '../i18n'
import { PERSON_ID, useCollectionSchema } from '../seo'

const { path } = useLocale()
const data = useContent(dataContent)
const c = useContent(workContent)

useCollectionSchema('work', (url, locale) => data.value.projects.map((project) => ({
  '@type': 'CreativeWork',
  '@id': `${url}#${project.id}`,
  url: `${url}#${project.id}`,
  name: project.title,
  description: project.text,
  abstract: project.result,
  image: `${SITE_URL}${project.image}`,
  keywords: project.tags,
  author: { '@id': PERSON_ID },
  inLanguage: locale,
})))
</script>

<template>
  <div>
    <PageIntro :title="c.title" :accent="c.accent" :copy="c.copy" />
    <section class="wrap work-list">
      <article v-for="(project, index) in data.projects" :id="project.id" :key="project.id" class="work-case">
        <div class="case-index">{{ String(index + 1).padStart(2, '0') }}</div>
        <div class="project-image">
          <img
            :src="project.image"
            :alt="project.imageAlt"
            :width="project.imageSize.width"
            :height="project.imageSize.height"
            :loading="index === 0 ? 'eager' : 'lazy'"
            decoding="async"
          />
        </div>
        <div class="case-copy">
          <p class="eyebrow">{{ project.sector }} · {{ project.period }}</p>
          <p class="case-role">{{ project.role }}<br /><span>{{ project.organisation }}</span></p>
          <h2>{{ project.title }}</h2>
          <p>{{ project.text }}</p>
          <p class="case-result"><strong>{{ c.outcome }}</strong>{{ project.result }}</p>
          <div class="tag-row">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="explained-tag"
              tabindex="0"
              :data-description="c.tagDescriptions[tag]"
              :aria-label="c.tagDescriptions[tag] ? `${tag}: ${c.tagDescriptions[tag]}` : tag"
            >{{ tag }}</span>
          </div>
        </div>
      </article>
    </section>
    <section class="cta-band compact">
      <div class="wrap">
        <p class="eyebrow">{{ c.cta.eyebrow }}</p>
        <h2>{{ c.cta.title[0] }}<br />{{ c.cta.title[1] }}</h2>
        <RouterLink :to="path('contact')" class="round-link" :aria-label="c.cta.linkLabel"><ArrowIcon /></RouterLink>
      </div>
    </section>
  </div>
</template>
