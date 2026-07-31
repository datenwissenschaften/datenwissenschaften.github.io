<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import ArrowIcon from '../components/ArrowIcon.vue'
import SystemIcon from '../components/SystemIcon.vue'
import { projects, services } from '../data'

const HOURLY_RATE = 120
const BASELINE_EMPLOYEE_HOURS = 100
const BASELINE_SYSTEM_COST = 3000
const EMPLOYEE_REDUCTION = 0.65
const SYSTEM_REDUCTION = 0.6

const efficiencyProgress = ref(0)
let animationFrame = 0

const employeeHours = computed(() => BASELINE_EMPLOYEE_HOURS * (1 - EMPLOYEE_REDUCTION * efficiencyProgress.value))
const employeeCost = computed(() => Math.round(employeeHours.value * HOURLY_RATE))
const systemCost = computed(() => Math.round(BASELINE_SYSTEM_COST * (1 - SYSTEM_REDUCTION * efficiencyProgress.value)))
const baselineProjectCost = BASELINE_EMPLOYEE_HOURS * HOURLY_RATE + BASELINE_SYSTEM_COST
const projectCost = computed(() => employeeCost.value + systemCost.value)
const projectSaving = computed(() => baselineProjectCost - projectCost.value)
const reduction = computed(() => Math.round((projectSaving.value / baselineProjectCost) * 100))
const automation = computed(() => Math.round(20 + efficiencyProgress.value * 65))
const leanProcess = computed(() => Math.round(25 + efficiencyProgress.value * 65))
const chartX = computed(() => 24 + efficiencyProgress.value * 252)
const chartY = computed(() => 25 + (1 - Math.pow(1 - efficiencyProgress.value, 2.25)) * 96)
const chartPointLeft = computed(() => `${chartX.value / 3}%`)
const chartPointTop = computed(() => `${chartY.value / 1.45}%`)
const costMilestones = [
  { label: 'Automate intake', progress: 0.28, left: '29%', top: '22%', alignEnd: false },
  { label: 'Streamline handoffs', progress: 0.55, left: '54%', top: '55%', alignEnd: false },
  { label: 'Right-size systems', progress: 0.78, left: '77%', top: '76%', alignEnd: true },
]
const connectedSystems = [
  { label: 'AI', icon: 'ai' },
  { label: 'Data', icon: 'database' },
  { label: 'Cloud', icon: 'cloud' },
  { label: 'CI/CD', icon: 'cicd' },
] as const

const euros = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR',
  maximumFractionDigits: 0,
})

onMounted(() => {
  if (globalThis.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    efficiencyProgress.value = 1
    return
  }

  const animationLength = 5000
  const startedAt = globalThis.performance.now()

  const animateEfficiency = (now: number) => {
    const linearProgress = Math.min((now - startedAt) / animationLength, 1)
    efficiencyProgress.value = 1 - Math.pow(1 - linearProgress, 3)
    if (linearProgress < 1) animationFrame = globalThis.requestAnimationFrame(animateEfficiency)
  }

  animationFrame = globalThis.requestAnimationFrame(animateEfficiency)
})

onBeforeUnmount(() => globalThis.cancelAnimationFrame(animationFrame))
</script>

<template>
  <div>
    <section class="hero wrap">
      <div class="hero-copy">
        <p class="eyebrow"><span class="status-dot" /> Data Science & AI Transformation</p>
        <h1>Less complexity.<br /><em>More intelligence.</em></h1>
        <p class="hero-lead">
          With 15 years in machine learning and AI transformation, we design production-grade
          systems that turn complex data into faster, safer decisions.
        </p>
        <div class="button-row">
          <RouterLink to="/contact" class="button button-primary">Start a conversation <ArrowIcon /></RouterLink>
          <RouterLink to="/work" class="text-link">Explore selected work <ArrowIcon /></RouterLink>
        </div>
      </div>
      <div
        class="hero-visual cost-visual"
        aria-label="Illustrative project resource visualization: employee and system costs fall from 15,000 euros to 5,400 euros as automation and lean processes improve."
      >
        <div class="visual-head">
          <span>Project cost efficiency</span><span>LIVE <i /></span>
        </div>
        <div class="cost-stage">
          <div class="cost-kpi">
            <span>Total project resource cost</span>
            <strong>{{ euros.format(projectCost) }}</strong>
            <small>
              <b>−{{ reduction }}%</b>
              employees + systems
            </small>
          </div>

          <div class="cost-chart" aria-hidden="true">
            <div class="chart-label chart-label-start"><span>Before</span><b>{{ euros.format(baselineProjectCost) }}</b></div>
            <div class="chart-label chart-label-end"><span>Optimized</span><b>{{ euros.format(5400) }}</b></div>
            <div class="system-stack">
              <span>Connected systems</span>
              <div>
                <span v-for="system in connectedSystems" :key="system.label">
                  <SystemIcon :name="system.icon" />
                  <small>{{ system.label }}</small>
                </span>
              </div>
            </div>
            <div
              v-for="milestone in costMilestones"
              :key="milestone.label"
              class="cost-milestone"
              :class="{ reached: efficiencyProgress >= milestone.progress, 'cost-milestone-end': milestone.alignEnd }"
              :style="{ left: milestone.left, top: milestone.top }"
            >
              <i />
              <span>{{ milestone.label }}</span>
            </div>
            <svg viewBox="0 0 300 145" preserveAspectRatio="none" :style="{ '--cost-progress': efficiencyProgress }">
              <defs>
                <linearGradient id="cost-area" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stop-color="var(--accent)" stop-opacity=".3" />
                  <stop offset="1" stop-color="var(--accent)" stop-opacity="0" />
                </linearGradient>
              </defs>
              <path class="cost-area" d="M24 25 C86 28 105 67 151 80 S224 112 276 121 L276 142 L24 142 Z" />
              <path class="cost-line-track" d="M24 25 C86 28 105 67 151 80 S224 112 276 121" />
              <path class="cost-line" d="M24 25 C86 28 105 67 151 80 S224 112 276 121" />
            </svg>
            <i class="moving-cost-point" :style="{ left: chartPointLeft, top: chartPointTop }" />
          </div>

          <div class="efficiency-controls">
            <div class="efficiency-row">
              <div><span>Employees · {{ employeeHours.toFixed(0) }} h</span><b>{{ euros.format(employeeCost) }}</b></div>
              <i><span :style="{ width: `${employeeHours}%` }" /></i>
            </div>
            <div class="efficiency-row">
              <div><span>System resources</span><b>{{ euros.format(systemCost) }}</b></div>
              <i><span :style="{ width: `${(systemCost / BASELINE_SYSTEM_COST) * 100}%` }" /></i>
            </div>
          </div>

          <div class="saving-card">
            <div class="saving-rates">
              <span>Automation <b>{{ automation }}%</b></span>
              <span>Lean <b>{{ leanProcess }}%</b></span>
            </div>
            <strong>{{ euros.format(projectSaving) }}<small>project saving</small></strong>
          </div>
        </div>
        <div class="visual-foot"><span>Employee resources</span><span>System resources</span><span>Example scenario</span></div>
      </div>
      <div class="hero-proof">
        <span>15 years’ experience</span>
        <span>PhD-trained thinking</span>
        <span>Production-grade delivery</span>
        <span>Team leadership</span>
      </div>
    </section>

    <section class="capability-strip" aria-labelledby="capability-strip-title">
      <div class="wrap capability-strip-inner">
        <div>
          <p class="eyebrow">Core capabilities</p>
          <h2 id="capability-strip-title">Senior expertise across the AI lifecycle.</h2>
        </div>
        <ul>
          <li><span>01</span>AI strategy</li>
          <li><span>02</span>Machine learning</li>
          <li><span>03</span>Data engineering</li>
          <li><span>04</span>LLM systems</li>
          <li><span>05</span>MLOps</li>
          <li><span>06</span>Model governance</li>
        </ul>
      </div>
    </section>

    <section class="section wrap">
      <div class="section-heading split-heading">
        <div>
          <p class="eyebrow">What we do</p>
          <h2>From difficult data<br />to simple decisions.</h2>
        </div>
        <p>We work across strategy, engineering, machine learning and governance—one accountable partner from first question to reliable production system.</p>
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
            More infrastructure does not automatically mean more capability. We begin with the decision you need to improve,
            then work backwards—automating the repeatable, measuring the useful and removing everything else.
          </p>
          <ul class="check-list">
            <li><span>01</span> Prove value before adding scale</li>
            <li><span>02</span> Automate operations, not accountability</li>
            <li><span>03</span> Build for your team to own</li>
          </ul>
          <RouterLink to="/about" class="text-link">How we work <ArrowIcon /></RouterLink>
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
      <div class="project-actions">
        <RouterLink to="/work" class="button button-outline">View all work <ArrowIcon /></RouterLink>
        <RouterLink to="/case-study" class="text-link">Explore the public case study <ArrowIcon /></RouterLink>
      </div>
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
