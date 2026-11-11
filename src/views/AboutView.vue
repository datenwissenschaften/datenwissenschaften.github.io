<script setup lang="ts">
import { RouterLink } from 'vue-router'
import ArrowIcon from '../components/ArrowIcon.vue'
import PageIntro from '../components/PageIntro.vue'
import portrait from '../assets/img/portfolio/profile-picture.jpg'
import aboutContent from '../content/about'
import dataContent from '../content/data'
import { GITHUB_URL, LINKEDIN_URL, THESIS_URL } from '../content/site'
import { useContent, useLocale } from '../i18n'

const { path } = useLocale()
const c = useContent(aboutContent)
const data = useContent(dataContent)
</script>

<template>
  <div>
    <PageIntro :title="c.title" :accent="c.accent" :copy="c.copy">
      <template #eyebrow>{{ c.eyebrow }}</template>
    </PageIntro>
    <section class="wrap about-profile">
      <div class="portrait-frame">
        <img :src="portrait" :alt="c.portraitAlt" width="600" height="900" />
        <span>{{ c.portraitCaption[0] }}<br />{{ c.portraitCaption[1] }}</span>
      </div>
      <div class="profile-copy">
        <p class="large-copy">
          {{ c.lead[0] }}<em>{{ c.lead[1] }}</em>
        </p>
        <p v-for="paragraph in c.paragraphs" :key="paragraph">{{ paragraph }}</p>
        <p>
          <strong>{{ c.doctorate.label }}:</strong>
          {{ c.doctorate.before }}<a :href="THESIS_URL" target="_blank" rel="noopener">{{ c.doctorate.thesisTitle }}</a>{{ c.doctorate.after }}
        </p>
        <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 0 32px">
          <RouterLink :to="path('contact')" class="text-link">{{ c.workWithMe }} <ArrowIcon /></RouterLink>
          <a :href="LINKEDIN_URL" class="text-link" target="_blank" rel="noopener me">{{ c.linkedin }}</a>
          <a :href="GITHUB_URL" class="text-link" target="_blank" rel="noopener me">{{ c.github }}</a>
        </div>
      </div>
    </section>

    <section class="principles-section">
      <div class="wrap">
        <div class="section-heading"><p class="eyebrow">{{ c.principles.eyebrow }}</p><h2>{{ c.principles.title }}</h2></div>
        <div class="principles-grid">
          <article v-for="(principle, index) in c.principles.items" :key="principle.title">
            <span>{{ String(index + 1).padStart(2, '0') }}</span><h3>{{ principle.title }}</h3><p>{{ principle.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="wrap experience-section">
      <div class="section-heading split-heading">
        <div><p class="eyebrow">{{ c.experience.eyebrow }}</p><h2>{{ c.experience.title[0] }}<br />{{ c.experience.title[1] }}</h2></div>
        <p>{{ c.experience.copy }}</p>
      </div>
      <div class="experience-list">
        <article v-for="item in data.experience" :key="`${item.period}-${item.role}`">
          <span>{{ item.period }}</span>
          <div>
            <h3>{{ item.role }}</h3>
            <p class="experience-organisation">{{ item.organisation }}</p>
          </div>
          <p>{{ item.summary }}</p>
        </article>
      </div>
    </section>

    <section class="wrap toolkit">
      <div class="section-heading split-heading">
        <div><p class="eyebrow">{{ c.toolkit.eyebrow }}</p><h2>{{ c.toolkit.title }}</h2></div>
        <p>{{ c.toolkit.copy }}</p>
      </div>
      <div class="toolkit-groups">
        <article v-for="group in c.toolkit.groups" :key="group.title" :class="{ 'toolkit-wide': group.wide }">
          <h3 :title="group.description">{{ group.title }}</h3>
          <div>
            <span
              v-for="item in group.items"
              :key="item.name"
              class="toolkit-item"
              tabindex="0"
              :data-description="item.description"
              :aria-label="`${item.name}: ${item.description}`"
            >{{ item.name }}</span>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>
