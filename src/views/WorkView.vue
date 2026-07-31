<script setup lang="ts">
import { RouterLink } from 'vue-router'
import ArrowIcon from '../components/ArrowIcon.vue'
import PageIntro from '../components/PageIntro.vue'
import { projects } from '../data'

const tagDescriptions: Record<string, string> = {
  'Azure Databricks': 'A Microsoft Azure lakehouse platform for collaborative data engineering, analytics and machine learning.',
  PySpark: 'The Python API for Apache Spark, used here to process large automotive datasets across distributed systems.',
  'Feature store': 'A managed layer for defining, sharing and serving consistent machine-learning features for training and inference.',
  MLOps: 'Practices and automation for reproducibly deploying, monitoring and governing machine-learning systems.',
  Keras: 'A high-level deep-learning API used to build and train neural networks.',
  'scikit-learn': 'A Python library for classical machine learning, preprocessing, model selection and evaluation.',
  Airflow: 'A workflow orchestrator for scheduling, monitoring and managing data pipelines as code.',
  PostgreSQL: 'A robust open-source relational database used for secure, structured application and analytical data.',
  'Health data': 'Sensitive biometric, behavioral and wellbeing information requiring strong privacy and security controls.',
  Python: 'A general-purpose programming language widely used for data science, automation and production services.',
  SparkSQL: 'Apache Spark’s module for querying and transforming structured data with SQL and DataFrame operations.',
  Looker: 'A business-intelligence platform for governed data modelling, dashboards and self-service analytics.',
  Matillion: 'A cloud data integration platform for building and operating extract, load and transform pipelines.',
  'Churn prediction': 'Machine-learning models that estimate which users are likely to disengage or leave.',
  'Learning to rank': 'Supervised machine learning that orders search results by their predicted relevance.',
  'Apache Spark': 'A distributed processing engine for large-scale data engineering, analytics and machine learning.',
  'Data migration': 'The controlled transfer and validation of data, schemas and workloads between systems.',
  'KPI reporting': 'Consistent measurement and presentation of key performance indicators for operational decisions.',
}
</script>

<template>
  <div>
    <PageIntro index="02" title="Proof lives in" accent="working systems." copy="Selected engagements across industries where data science moved from technical possibility to practical value.">
      <template #eyebrow>Selected work</template>
    </PageIntro>
    <section class="wrap work-list">
      <article v-for="(project, index) in projects" :id="project.id" :key="project.sector" class="work-case">
        <div class="case-index">{{ String(index + 1).padStart(2, '0') }}</div>
        <div class="project-image"><img :src="project.image" :alt="`${project.sector} data science work`" /></div>
        <div class="case-copy">
          <p class="eyebrow">{{ project.sector }} · {{ project.period }}</p>
          <p class="case-role">{{ project.role }}<br /><span>{{ project.organisation }}</span></p>
          <h2>{{ project.title }}</h2>
          <p>{{ project.text }}</p>
          <p class="case-result"><strong>Outcome</strong>{{ project.result }}</p>
          <div class="tag-row">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="explained-tag"
              tabindex="0"
              :data-description="tagDescriptions[tag]"
              :aria-label="`${tag}: ${tagDescriptions[tag]}`"
            >{{ tag }}</span>
          </div>
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
