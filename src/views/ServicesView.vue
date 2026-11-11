<script setup lang="ts">
import { RouterLink } from 'vue-router'
import ArrowIcon from '../components/ArrowIcon.vue'
import PageIntro from '../components/PageIntro.vue'
import dataContent from '../content/data'
import servicesContent from '../content/services'
import { useContent, useLocale } from '../i18n'

const { path } = useLocale()
const c = useContent(servicesContent)
const data = useContent(dataContent)
</script>

<template>
  <div>
    <PageIntro :title="c.intro.title" :accent="c.intro.accent" :copy="c.intro.copy">
      <template #eyebrow>{{ c.intro.eyebrow }}</template>
    </PageIntro>

    <section class="wrap service-detail-list">
      <article v-for="service in data.services" :key="service.number" class="service-detail">
        <span class="service-number">{{ service.number }}</span>
        <div>
          <h2>{{ service.title }}</h2>
          <p>{{ service.text }}</p>
          <template v-if="c.details[service.number]">
            <p class="service-audience"><strong>{{ c.audienceLabel }}:</strong> {{ c.details[service.number]?.audience }}</p>
            <p class="service-audience">{{ c.details[service.number]?.detail }}</p>
          </template>
        </div>
        <div class="service-deliverables">
          <p class="eyebrow">{{ c.deliverablesLabel }}</p>
          <span v-for="item in c.details[service.number]?.deliverables ?? service.outcome.split(' · ')" :key="item">{{ item }}</span>
          <template v-if="c.details[service.number]">
            <p class="eyebrow service-proof-label">{{ c.proofLabel }}</p>
            <RouterLink :to="path('work', c.details[service.number]?.proof.project)" class="text-link">
              {{ c.details[service.number]?.proof.label }} <ArrowIcon />
            </RouterLink>
          </template>
        </div>
      </article>
    </section>

    <section class="process-section">
      <div class="wrap">
        <div class="section-heading split-heading">
          <div><p class="eyebrow">{{ c.process.eyebrow }}</p><h2>{{ c.process.title[0] }}<br />{{ c.process.title[1] }}</h2></div>
          <p>{{ c.process.copy }}</p>
        </div>
        <div class="process-grid">
          <article v-for="(step, index) in c.process.steps" :key="step.title">
            <span>{{ String(index + 1).padStart(2, '0') }}</span>
            <h3>{{ step.title }}</h3>
            <p>{{ step.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section wrap" aria-labelledby="engagement-title">
      <div class="section-heading split-heading">
        <div><p class="eyebrow">{{ c.engagement.eyebrow }}</p><h2 id="engagement-title">{{ c.engagement.title }}</h2></div>
        <p>{{ c.engagement.copy }}</p>
      </div>
      <div class="principles-grid">
        <article v-for="(item, index) in c.engagement.items" :key="item.title">
          <span>{{ String(index + 1).padStart(2, '0') }}</span>
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </article>
      </div>
    </section>

    <section class="principles-section" aria-labelledby="compliance-title">
      <div class="wrap">
        <div class="section-heading split-heading">
          <div><p class="eyebrow">{{ c.compliance.eyebrow }}</p><h2 id="compliance-title">{{ c.compliance.title }}</h2></div>
          <p>{{ c.compliance.copy }}</p>
        </div>
        <ul class="compliance-list">
          <li v-for="item in c.compliance.items" :key="item.title">
            <strong>{{ item.title }}</strong>
            <span>{{ item.text }}</span>
          </li>
        </ul>
      </div>
    </section>

    <section class="section wrap" aria-labelledby="faq-title">
      <div class="section-heading">
        <p class="eyebrow">{{ c.faq.eyebrow }}</p><h2 id="faq-title">{{ c.faq.title }}</h2>
      </div>
      <ol class="legal-principles">
        <li v-for="item in c.faq.items" :key="item.question">
          <h3>{{ item.question }}</h3>
          <p>{{ item.answer }}</p>
        </li>
      </ol>
    </section>

    <section class="inline-cta wrap">
      <div><p class="eyebrow">{{ c.cta.eyebrow }}</p><h2>{{ c.cta.title }}</h2></div>
      <RouterLink :to="path('contact')" class="button button-primary">{{ c.cta.button }} <ArrowIcon /></RouterLink>
    </section>
  </div>
</template>

<style scoped>
.service-detail .service-audience {
  margin-top: 18px;
}

.service-audience strong {
  color: var(--text);
  font-weight: 600;
}

.service-proof-label {
  margin-top: 28px;
}

.service-deliverables .text-link {
  font-size: 14px;
}

.compliance-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0 40px;
  padding: 0;
  margin: 0;
  list-style: none;
  border-top: 1px solid var(--line);
}

.compliance-list li {
  display: grid;
  gap: 6px;
  padding: 22px 0;
  border-bottom: 1px solid var(--line);
}

.compliance-list strong {
  color: var(--text);
  font-weight: 600;
}

.compliance-list span {
  color: var(--muted);
  font-size: 14px;
}

@media (max-width: 760px) {
  .compliance-list {
    grid-template-columns: 1fr;
  }
}
</style>
