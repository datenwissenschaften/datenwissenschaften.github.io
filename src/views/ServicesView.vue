<script setup lang="ts">
import { RouterLink } from 'vue-router'
import ArrowIcon from '../components/ArrowIcon.vue'
import PageIntro from '../components/PageIntro.vue'
import { services } from '../data'
</script>

<template>
  <div>
    <PageIntro index="01" title="Expertise that turns" accent="data into movement." copy="No hand-offs and no theatre. Senior guidance and practical implementation across the full data lifecycle.">
      <template #eyebrow>Services</template>
    </PageIntro>

    <section class="wrap service-detail-list">
      <article v-for="service in services" :key="service.number" class="service-detail">
        <span class="service-number">{{ service.number }}</span>
        <div>
          <h2>{{ service.title }}</h2>
          <p>{{ service.text }}</p>
        </div>
        <div class="service-deliverables">
          <p class="eyebrow">Typical focus</p>
          <span v-for="item in service.outcome.split(' · ')" :key="item">{{ item }}</span>
        </div>
      </article>
    </section>

    <section class="process-section">
      <div class="wrap">
        <div class="section-heading split-heading">
          <div><p class="eyebrow">A small, sharp process</p><h2>Three steps.<br />Zero theatre.</h2></div>
          <p>Every engagement is shaped around fast learning, visible progress and a clean handover.</p>
        </div>
        <div class="process-grid">
          <article><span>01</span><h3>Find the lever</h3><p>Clarify the decision, bottleneck or repeated task where data can create the most useful change.</p></article>
          <article><span>02</span><h3>Prove the path</h3><p>Build the smallest credible solution, test it against reality and measure whether it deserves to scale.</p></article>
          <article><span>03</span><h3>Automate & transfer</h3><p>Make the winning path reliable, observable and understandable—then put it in your team’s hands.</p></article>
        </div>
      </div>
    </section>

    <section class="inline-cta wrap">
      <div><p class="eyebrow">Not sure where to begin?</p><h2>Bring the messy problem.</h2></div>
      <RouterLink to="/contact" class="button button-primary">Book an initial call <ArrowIcon /></RouterLink>
    </section>
  </div>
</template>
