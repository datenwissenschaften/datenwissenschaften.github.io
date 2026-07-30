<script setup lang="ts">
import { RouterLink } from 'vue-router'
import ArrowIcon from '../components/ArrowIcon.vue'
import PageIntro from '../components/PageIntro.vue'
import portrait from '../assets/img/portfolio/profile-picture.png'
</script>

<template>
  <div>
    <PageIntro index="03" title="Rigorous thinking." accent="Practical delivery." copy="A scientist’s curiosity, an engineer’s discipline and a consultant’s focus on what changes the business.">
      <template #eyebrow>About Dr. Franke</template>
    </PageIntro>
    <section class="wrap about-profile">
      <div class="portrait-frame">
        <img :src="portrait" alt="Dr. Martin Franke, Data Science Consultant" />
        <span>Dr. Martin Franke<br />Founder & Data Scientist</span>
      </div>
      <div class="profile-copy">
        <p class="large-copy">
          I help organisations use data with more <em>clarity, speed and independence.</em>
        </p>
        <p>
          My work spans data strategy, engineering, predictive analytics and AI. That range matters: useful solutions
          rarely live inside one discipline. I can follow the problem from the boardroom question through to the
          production pipeline—and keep the intent intact along the way.
        </p>
        <p>
          Dr. Franke Datenwissenschaften is deliberately lean. You work directly with the person doing the thinking
          and building. The result is less coordination overhead, faster feedback and systems that fit your actual
          organisation.
        </p>
        <RouterLink to="/contact" class="text-link">Work with me <ArrowIcon /></RouterLink>
      </div>
    </section>

    <section class="principles-section">
      <div class="wrap">
        <div class="section-heading"><p class="eyebrow">Operating principles</p><h2>How good work gets done.</h2></div>
        <div class="principles-grid">
          <article><span>01</span><h3>Start with the decision</h3><p>Technology earns its place by improving an outcome—not by adding another logo to the architecture diagram.</p></article>
          <article><span>02</span><h3>Make complexity pay rent</h3><p>Every extra model, service and dependency must create more value than the burden it introduces.</p></article>
          <article><span>03</span><h3>Automate the repeatable</h3><p>Human attention belongs on exceptions and judgment. Everything predictable should become a dependable flow.</p></article>
          <article><span>04</span><h3>Leave capability behind</h3><p>Good consulting reduces dependency. Your team should understand, operate and extend what we build together.</p></article>
        </div>
      </div>
    </section>

    <section class="wrap toolkit">
      <p class="eyebrow">Technical range</p>
      <div><span>Python</span><span>Scala</span><span>Apache Spark</span><span>Databricks</span><span>Machine Learning</span><span>Data Platforms</span><span>Full-stack systems</span></div>
    </section>
  </div>
</template>
