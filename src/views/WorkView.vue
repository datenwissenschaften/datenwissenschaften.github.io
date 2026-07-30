<script setup lang="ts">
import { RouterLink } from 'vue-router'
import ArrowIcon from '../components/ArrowIcon.vue'
import PageIntro from '../components/PageIntro.vue'
import { projects } from '../data'
</script>

<template>
  <div>
    <PageIntro index="02" title="Proof lives in" accent="working systems." copy="Selected engagements across industries where data science moved from technical possibility to practical value.">
      <template #eyebrow>Selected work</template>
    </PageIntro>
    <section class="wrap work-list">
      <article v-for="(project, index) in projects" :key="project.sector" class="work-case">
        <div class="case-index">{{ String(index + 1).padStart(2, '0') }}</div>
        <div class="project-image"><img :src="project.image" :alt="`${project.sector} data science work`" /></div>
        <div class="case-copy">
          <p class="eyebrow">{{ project.sector }}</p>
          <h2>{{ project.title }}</h2>
          <p>{{ project.text }}</p>
          <div class="tag-row"><span v-for="tag in project.tags" :key="tag">{{ tag }}</span></div>
        </div>
      </article>
    </section>
    <section class="cta-band compact">
      <div class="wrap">
        <p class="eyebrow">Your challenge could be next</p>
        <h2>Turn uncertainty<br />into a system.</h2>
        <RouterLink to="/contact" class="round-link"><ArrowIcon /></RouterLink>
      </div>
    </section>
  </div>
</template>
