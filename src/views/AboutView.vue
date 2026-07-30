<script setup lang="ts">
import { RouterLink } from 'vue-router'
import ArrowIcon from '../components/ArrowIcon.vue'
import PageIntro from '../components/PageIntro.vue'
import portrait from '../assets/img/portfolio/profile-picture.png'
import { experience } from '../data'
</script>

<template>
  <div>
    <PageIntro index="03" title="Rigorous thinking." accent="Practical delivery." copy="Fifteen years of machine learning, AI transformation and technical leadership across automotive, healthcare, media and research.">
      <template #eyebrow>About Dr. Franke</template>
    </PageIntro>
    <section class="wrap about-profile">
      <div class="portrait-frame">
        <img :src="portrait" alt="Dr. Martin Franke, Data Science Consultant" />
        <span>Dr. Martin Franke<br />Founder · Lead Data Scientist · AI Strategist</span>
      </div>
      <div class="profile-copy">
        <p class="large-copy">
          I help organisations use data with more <em>clarity, speed and independence.</em>
        </p>
        <p>
          My work spans AI strategy, data engineering, predictive analytics, model governance and production delivery.
          I have led automotive AI programmes, built multi-terabyte Spark platforms, developed personalised healthcare
          products and translated research into working systems. That breadth lets me follow a problem from the
          boardroom question to the production pipeline—and keep the intent intact along the way.
        </p>
        <p>
          I also invest in the capability around the technology: mentoring data scientists in clean code, test-driven
          development, CI/CD and reproducible workflows. Dr. Franke Datenwissenschaften is deliberately lean, giving
          clients direct access to senior thinking and hands-on implementation.
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

    <section class="wrap experience-section">
      <div class="section-heading split-heading">
        <div><p class="eyebrow">Selected experience</p><h2>Research depth.<br />Production perspective.</h2></div>
        <p>Roles spanning academic research, product leadership, enterprise platforms and applied AI strategy.</p>
      </div>
      <div class="experience-list">
        <article v-for="item in experience" :key="`${item.period}-${item.role}`">
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
        <div><p class="eyebrow">Core technologies</p><h2>A practical, production-ready toolkit.</h2></div>
        <p>Selected for the problem, with an emphasis on tested code, reproducible delivery and governance.</p>
      </div>
      <div class="toolkit-groups">
        <article>
          <h3>AI & machine learning</h3>
          <div><span>scikit-learn</span><span>PyCaret</span><span>Ollama</span><span>llama-factory</span><span>FiftyOne</span></div>
        </article>
        <article>
          <h3>Languages & services</h3>
          <div><span>Python</span><span>PySpark</span><span>pandas</span><span>Scala</span><span>SQL</span><span>FastAPI</span><span>Fugue</span></div>
        </article>
        <article>
          <h3>Data & pipelines</h3>
          <div><span>Apache Spark</span><span>Databricks</span><span>Airflow</span><span>Matillion</span><span>PostgreSQL</span></div>
        </article>
        <article>
          <h3>Cloud services</h3>
          <div><span>Azure Cloud</span><span>AWS</span><span>Google Cloud</span></div>
        </article>
        <article class="toolkit-wide">
          <h3>Governance & collaboration</h3>
          <div><span>Model governance</span><span>Bias audits</span><span>A/B testing</span><span>GDPR</span><span>NIST SP 800-53</span><span>CI/CD</span><span>Scrum</span><span>Kanban</span><span>SAFe</span><span>GitHub</span><span>Jira</span><span>Confluence</span></div>
        </article>
      </div>
    </section>
  </div>
</template>
