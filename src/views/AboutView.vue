<script setup lang="ts">
import { RouterLink } from 'vue-router'
import ArrowIcon from '../components/ArrowIcon.vue'
import PageIntro from '../components/PageIntro.vue'
import portrait from '../assets/img/portfolio/profile-picture.png'
import { experience } from '../data'

const toolkitGroups = [
  {
    title: 'AI & machine learning',
    description: 'Tools for training, serving and evaluating predictive and generative AI models.',
    items: [
      { name: 'scikit-learn', description: 'A Python library for classical machine learning, preprocessing, model selection and evaluation.' },
      { name: 'PyCaret', description: 'A low-code Python framework that automates common machine-learning experiments and comparisons.' },
      { name: 'Ollama', description: 'A local runtime for downloading, running and serving large language models.' },
      { name: 'llama-factory', description: 'A framework for fine-tuning and evaluating large language models with a wide range of training methods.' },
      { name: 'FiftyOne', description: 'A visual toolkit for exploring datasets, evaluating computer-vision models and finding data-quality issues.' },
    ],
  },
  {
    title: 'Languages & services',
    description: 'Languages, libraries and frameworks used to transform data and build production services.',
    items: [
      { name: 'Python', description: 'A general-purpose programming language widely used for data science, automation and backend services.' },
      { name: 'PySpark', description: 'The Python API for Apache Spark, used to process large datasets across distributed systems.' },
      { name: 'pandas', description: 'A Python library for tabular data manipulation, analysis and transformation.' },
      { name: 'Scala', description: 'A JVM language commonly used to build type-safe, high-performance Spark applications.' },
      { name: 'SQL', description: 'The standard language for querying, transforming and managing relational data.' },
      { name: 'FastAPI', description: 'A modern Python framework for building fast, typed and automatically documented web APIs.' },
      { name: 'Fugue', description: 'An abstraction layer for running data workflows consistently across pandas, Spark and other compute engines.' },
    ],
  },
  {
    title: 'Data & pipelines',
    description: 'Platforms and services for storing, transforming, orchestrating and delivering reliable data.',
    items: [
      { name: 'Apache Spark', description: 'A distributed processing engine for large-scale data engineering, analytics and machine learning.' },
      { name: 'Databricks', description: 'A lakehouse platform that combines data engineering, analytics, governance and machine learning.' },
      { name: 'Airflow', description: 'A workflow orchestrator for scheduling, monitoring and managing data pipelines as code.' },
      { name: 'Matillion', description: 'A cloud data integration platform for building and operating ELT pipelines.' },
      { name: 'PostgreSQL', description: 'A robust open-source relational database with strong SQL and extensibility support.' },
    ],
  },
  {
    title: 'Cloud services',
    description: 'Managed infrastructure and platform services used to deploy scalable data and AI systems.',
    items: [
      { name: 'Azure Cloud', description: 'Microsoft’s cloud platform for computing, storage, networking, data and AI services.' },
      { name: 'AWS', description: 'Amazon Web Services, a broad cloud platform for infrastructure, data processing and machine learning.' },
      { name: 'Google Cloud', description: 'Google’s cloud platform for infrastructure, analytics, data engineering and artificial intelligence.' },
    ],
  },
  {
    title: 'Governance & collaboration',
    description: 'Practices, standards and tools that make delivery controlled, auditable and collaborative.',
    wide: true,
    items: [
      { name: 'Model governance', description: 'Policies and controls for approving, documenting, monitoring and retiring models responsibly.' },
      { name: 'Bias audits', description: 'Structured tests that identify unfair or systematically different model outcomes across groups.' },
      { name: 'A/B testing', description: 'A controlled experiment comparing variants to determine which produces a better outcome.' },
      { name: 'GDPR', description: 'The EU regulation governing lawful, transparent and secure processing of personal data.' },
      { name: 'NIST SP 800-53', description: 'A catalogue of security and privacy controls for protecting information systems and organisations.' },
      { name: 'CI/CD', description: 'Automated practices for continuously testing, integrating and safely delivering software changes.' },
      { name: 'Scrum', description: 'An iterative delivery framework organised around short cycles, defined roles and regular feedback.' },
      { name: 'Kanban', description: 'A visual workflow method that limits work in progress and improves flow.' },
      { name: 'SAFe', description: 'The Scaled Agile Framework for coordinating agile planning and delivery across large organisations.' },
      { name: 'GitHub', description: 'A platform for Git-based source control, code review, automation and team collaboration.' },
      { name: 'Jira', description: 'A work-tracking platform for planning, prioritising and managing software delivery.' },
      { name: 'Confluence', description: 'A collaborative workspace for documentation, decisions and shared project knowledge.' },
    ],
  },
]
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
        <p>
          Having lived for extended periods in four countries, I have also had the opportunity to learn from different
          cultures and ways of working—and to build a global network of colleagues and collaborators. That experience
          has taught me to listen carefully, adapt to the local context and collaborate thoughtfully across borders.
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
        <article v-for="group in toolkitGroups" :key="group.title" :class="{ 'toolkit-wide': group.wide }">
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
