<script setup lang="ts">
import { RouterLink } from 'vue-router'
import ArrowIcon from '../components/ArrowIcon.vue'
import { projects, services } from '../data'
</script>

<template>
  <div>
    <section class="hero wrap">
      <div class="hero-copy">
        <p class="eyebrow"><span class="status-dot" /> Independent data science consultant</p>
        <h1>Less complexity.<br /><em>More intelligence.</em></h1>
        <p class="hero-lead">
          I’m Dr. Martin Franke. I design lean data systems, useful AI and high-leverage automations—so your business
          gets results without building an empire of tools.
        </p>
        <div class="button-row">
          <RouterLink to="/contact" class="button button-primary">Start a conversation <ArrowIcon /></RouterLink>
          <RouterLink to="/work" class="text-link">Explore selected work <ArrowIcon /></RouterLink>
        </div>
      </div>
      <div class="hero-visual" aria-label="Data visualization showing an efficient path to value">
        <div class="visual-head">
          <span>System efficiency</span><span>LIVE <i /></span>
        </div>
        <div class="orbit">
          <div class="orbit-ring ring-one" />
          <div class="orbit-ring ring-two" />
          <div class="orbit-ring ring-three" />
          <div class="orbit-core"><strong>10×</strong><span>leverage</span></div>
          <span class="data-node n1">INPUT<br /><b>Data</b></span>
          <span class="data-node n2">OUTPUT<br /><b>Value</b></span>
          <span class="data-node n3">PROCESS<br /><b>Lean</b></span>
        </div>
        <div class="visual-foot"><span>Resources ↓</span><span>Automation ↑</span><span>Clarity ↑</span></div>
      </div>
      <div class="hero-proof">
        <span>PhD-trained thinking</span>
        <span>Full-stack delivery</span>
        <span>Business-first decisions</span>
      </div>
    </section>

    <section class="marquee" aria-label="Areas of expertise">
      <div>Strategy <i /> Machine learning <i /> Data engineering <i /> Automation <i /> Analytics <i /> Strategy <i /> Machine learning</div>
    </section>

    <section class="section wrap">
      <div class="section-heading split-heading">
        <div>
          <p class="eyebrow">What I do</p>
          <h2>From difficult data<br />to simple decisions.</h2>
        </div>
        <p>I work across strategy, engineering and machine learning—one accountable partner from first question to working system.</p>
      </div>
      <div class="service-list">
        <RouterLink v-for="service in services" :key="service.number" to="/services" class="service-row">
          <span>{{ service.number }}</span>
          <h3>{{ service.title }}</h3>
          <p>{{ service.outcome }}</p>
          <ArrowIcon />
        </RouterLink>
      </div>
    </section>

    <section class="approach-section">
      <div class="wrap approach-grid">
        <div class="approach-graphic">
          <div class="metric-card metric-main"><span>Operational load</span><strong>−64%</strong><small>after automation</small></div>
          <div class="metric-card metric-side"><span>Useful output</span><strong>↑</strong></div>
          <div class="chart-lines"><i /><i /><i /><i /><i /><b /></div>
        </div>
        <div class="approach-copy">
          <p class="eyebrow">The lean principle</p>
          <h2>The best system is the smallest one that solves the problem.</h2>
          <p>
            More infrastructure does not automatically mean more capability. I begin with the decision you need to improve,
            then work backwards—automating the repeatable, measuring the useful and removing everything else.
          </p>
          <ul class="check-list">
            <li><span>01</span> Prove value before adding scale</li>
            <li><span>02</span> Automate operations, not accountability</li>
            <li><span>03</span> Build for your team to own</li>
          </ul>
          <RouterLink to="/about" class="text-link">How I work <ArrowIcon /></RouterLink>
        </div>
      </div>
    </section>

    <section class="section wrap">
      <div class="section-heading">
        <p class="eyebrow">Selected work</p>
        <h2>Experience, applied.</h2>
      </div>
      <div class="project-grid project-grid-home">
        <article v-for="project in projects.slice(0, 2)" :key="project.sector" class="project-card">
          <div class="project-image"><img :src="project.image" :alt="`${project.sector} project`" /></div>
          <div class="project-meta"><span>{{ project.sector }}</span><span>Case {{ String(projects.indexOf(project) + 1).padStart(2, '0') }}</span></div>
          <h3>{{ project.title }}</h3>
          <p>{{ project.text }}</p>
        </article>
      </div>
      <RouterLink to="/work" class="button button-outline">View all work <ArrowIcon /></RouterLink>
    </section>

    <section class="cta-band">
      <div class="wrap">
        <p class="eyebrow">Have a data problem?</p>
        <h2>Let’s make it<br /><em>simpler.</em></h2>
        <RouterLink to="/contact" class="round-link" aria-label="Start a conversation"><ArrowIcon /></RouterLink>
      </div>
    </section>
  </div>
</template>
