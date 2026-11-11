<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import ArrowIcon from '../components/ArrowIcon.vue'
import SystemIcon from '../components/SystemIcon.vue'
import homeContent from '../content/home'
import dataContent from '../content/data'
import { CALENDLY_URL } from '../content/site'
import { useContent, useLocale } from '../i18n'

const { locale, path } = useLocale()
const c = useContent(homeContent)
const data = useContent(dataContent)

const HOURLY_RATE = 120
const BASELINE_EMPLOYEE_HOURS = 100
const BASELINE_SYSTEM_COST = 3000
const EMPLOYEE_REDUCTION = 0.65
const SYSTEM_REDUCTION = 0.6

// Prerendered at the end state, so crawlers and visitors without JavaScript see the
// final figures; the animation replays from the start once the page is interactive.
const efficiencyProgress = ref(1)
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
const milestonePositions = [
  { progress: 0.28, left: '29%', top: '22%', alignEnd: false },
  { progress: 0.55, left: '54%', top: '55%', alignEnd: false },
  { progress: 0.78, left: '77%', top: '76%', alignEnd: true },
]
const costMilestones = computed(() =>
  milestonePositions.map((position, index) => ({ ...position, label: c.value.visual.milestones[index] })),
)
const connectedSystems = computed(() => {
  const labels = c.value.visual.systems
  return [
    { label: labels.ai, icon: 'ai' },
    { label: labels.data, icon: 'database' },
    { label: labels.cloud, icon: 'cloud' },
    { label: labels.cicd, icon: 'cicd' },
  ] as const
})

const euros = computed(
  () =>
    new Intl.NumberFormat(locale.value === 'de' ? 'de-DE' : 'en-IE', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0,
    }),
)

onMounted(() => {
  if (globalThis.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  efficiencyProgress.value = 0

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
        <p class="eyebrow"><span class="status-dot" /> {{ c.hero.eyebrow }}</p>
        <h1>{{ c.hero.title[0] }}<br /><em>{{ c.hero.title[1] }}</em></h1>
        <p class="hero-lead">{{ c.hero.lead }}</p>
        <div class="button-row">
          <a :href="CALENDLY_URL" target="_blank" rel="noopener" class="button button-primary">{{ c.hero.primaryCta }} <ArrowIcon /></a>
          <RouterLink :to="path('work')" class="text-link">{{ c.hero.secondaryCta }} <ArrowIcon /></RouterLink>
        </div>
      </div>
      <div class="hero-visual cost-visual" :aria-label="c.visual.aria">
        <div class="visual-head">
          <span>{{ c.visual.head }}</span><span>{{ c.visual.badge }} <i /></span>
        </div>
        <div class="cost-stage">
          <div class="cost-kpi">
            <span>{{ c.visual.kpiLabel }}</span>
            <strong>{{ euros.format(projectCost) }}</strong>
            <small>
              <b>−{{ reduction }}%</b>
              {{ c.visual.kpiNote }}
            </small>
          </div>

          <div class="cost-chart" aria-hidden="true">
            <div class="chart-label chart-label-start"><span>{{ c.visual.before }}</span><b>{{ euros.format(baselineProjectCost) }}</b></div>
            <div class="chart-label chart-label-end"><span>{{ c.visual.optimized }}</span><b>{{ euros.format(5400) }}</b></div>
            <div class="system-stack">
              <span>{{ c.visual.connectedSystems }}</span>
              <div>
                <span v-for="system in connectedSystems" :key="system.icon">
                  <SystemIcon :name="system.icon" />
                  <small>{{ system.label }}</small>
                </span>
              </div>
            </div>
            <div
              v-for="milestone in costMilestones"
              :key="milestone.progress"
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
              <div><span>{{ c.visual.employees }} · {{ employeeHours.toFixed(0) }} {{ c.visual.hours }}</span><b>{{ euros.format(employeeCost) }}</b></div>
              <i><span :style="{ width: `${employeeHours}%` }" /></i>
            </div>
            <div class="efficiency-row">
              <div><span>{{ c.visual.systemResources }}</span><b>{{ euros.format(systemCost) }}</b></div>
              <i><span :style="{ width: `${(systemCost / BASELINE_SYSTEM_COST) * 100}%` }" /></i>
            </div>
          </div>

          <div class="saving-card">
            <div class="saving-rates">
              <span>{{ c.visual.automation }} <b>{{ automation }}%</b></span>
              <span>{{ c.visual.lean }} <b>{{ leanProcess }}%</b></span>
            </div>
            <strong>{{ euros.format(projectSaving) }}<small>{{ c.visual.saving }}</small></strong>
          </div>
        </div>
        <div class="visual-foot"><span v-for="label in c.visual.foot" :key="label">{{ label }}</span></div>
      </div>
      <div class="hero-proof">
        <span v-for="item in c.hero.proof" :key="item">{{ item }}</span>
      </div>
    </section>

    <section class="capability-strip" aria-labelledby="capability-strip-title">
      <div class="wrap capability-strip-inner">
        <div>
          <p class="eyebrow">{{ c.capabilities.eyebrow }}</p>
          <h2 id="capability-strip-title">{{ c.capabilities.title }}</h2>
        </div>
        <ul>
          <li v-for="(item, index) in c.capabilities.items" :key="item"><span>{{ String(index + 1).padStart(2, '0') }}</span>{{ item }}</li>
        </ul>
      </div>
    </section>

    <section class="section wrap">
      <div class="section-heading split-heading">
        <div>
          <p class="eyebrow">{{ c.services.eyebrow }}</p>
          <h2>{{ c.services.title[0] }}<br />{{ c.services.title[1] }}</h2>
        </div>
        <p>{{ c.services.copy }}</p>
      </div>
      <div class="service-list">
        <RouterLink v-for="service in data.services" :key="service.number" :to="path('services')" class="service-row">
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
          <div class="metric-card metric-main">
            <span>{{ c.approach.metricLabel }}</span><strong>−64%</strong><small>{{ c.approach.metricNote }}</small>
            <small>({{ c.approach.metricExample }})</small>
          </div>
          <div class="metric-card metric-side"><span>{{ c.approach.sideLabel }}</span><strong>↑</strong></div>
          <div class="chart-lines"><i /><i /><i /><i /><i /><b /></div>
        </div>
        <div class="approach-copy">
          <p class="eyebrow">{{ c.approach.eyebrow }}</p>
          <h2>{{ c.approach.title }}</h2>
          <p>{{ c.approach.copy }}</p>
          <ul class="check-list">
            <li v-for="(point, index) in c.approach.points" :key="point"><span>{{ String(index + 1).padStart(2, '0') }}</span> {{ point }}</li>
          </ul>
          <RouterLink :to="path('about')" class="text-link">{{ c.approach.link }} <ArrowIcon /></RouterLink>
        </div>
      </div>
    </section>

    <section class="section wrap">
      <div class="section-heading">
        <p class="eyebrow">{{ c.work.eyebrow }}</p>
        <h2>{{ c.work.title }}</h2>
      </div>
      <div class="project-grid project-grid-home">
        <article v-for="(project, index) in data.projects.slice(0, 2)" :key="project.id" class="project-card">
          <RouterLink :to="path('work', project.id)" class="project-image" :aria-label="c.work.viewProject(project.title)">
            <img
              :src="project.image"
              :alt="c.work.imageAlt(project.sector)"
              :width="project.imageSize.width"
              :height="project.imageSize.height"
              loading="lazy"
            />
          </RouterLink>
          <div class="project-meta"><span>{{ project.sector }}</span><span>{{ c.work.case }} {{ String(index + 1).padStart(2, '0') }}</span></div>
          <h3>{{ project.title }}</h3>
          <p>{{ project.text }}</p>
        </article>
      </div>
      <div class="project-actions">
        <RouterLink :to="path('work')" class="button button-outline">{{ c.work.viewAll }} <ArrowIcon /></RouterLink>
        <RouterLink :to="path('case-study')" class="text-link">{{ c.work.caseStudies }} <ArrowIcon /></RouterLink>
      </div>
    </section>

    <section class="cta-band">
      <div class="wrap">
        <p class="eyebrow">{{ c.cta.eyebrow }}</p>
        <h2>{{ c.cta.title }}<br /><em>{{ c.cta.accent }}</em></h2>
        <a :href="CALENDLY_URL" target="_blank" rel="noopener" class="round-link" :aria-label="c.cta.aria"><ArrowIcon /></a>
      </div>
    </section>
  </div>
</template>
