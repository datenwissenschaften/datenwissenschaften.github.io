<script setup lang="ts">
import { RouterLink } from 'vue-router'
import ArrowIcon from '../components/ArrowIcon.vue'
import PageIntro from '../components/PageIntro.vue'
import dataContent from '../content/data'
import workContent from '../content/work'
import { useContent, useLocale } from '../i18n'

const { path } = useLocale()
const data = useContent(dataContent)
const c = useContent(workContent)
</script>

<template>
  <div>
    <PageIntro :title="c.title" :accent="c.accent" :copy="c.copy">
      <template #eyebrow>{{ c.eyebrow }}</template>
    </PageIntro>
    <section class="wrap work-list">
      <article v-for="(project, index) in data.projects" :id="project.id" :key="project.id" class="work-case">
        <div class="case-index">{{ String(index + 1).padStart(2, '0') }}</div>
        <div class="project-image">
          <img
            :src="project.image"
            :alt="c.imageAlt(project.sector)"
            :width="project.imageSize.width"
            :height="project.imageSize.height"
            :loading="index === 0 ? 'eager' : 'lazy'"
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
