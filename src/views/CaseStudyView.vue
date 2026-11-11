<script setup lang="ts">
import { RouterLink } from 'vue-router'
import PageIntro from '../components/PageIntro.vue'
import labImage from '../assets/img/speedlab/lab.webp'
import methodImage from '../assets/img/speedlab/method.webp'
import { useContent } from '../i18n'
import { GITHUB_URL } from '../content/site'
import content from '../content/case-study'

const c = useContent(content)
const pad = (index: number) => String(index + 1).padStart(2, '0')
</script>

<template>
  <div>
    <PageIntro :title="c.intro.title" :accent="c.intro.accent" :copy="c.intro.copy">
      <template #eyebrow>{{ c.intro.eyebrow }}</template>
    </PageIntro>

    <section class="case-repo-section">
      <div class="wrap">
        <div class="section-heading split-heading">
          <div>
            <p class="eyebrow">{{ c.repos.eyebrow }}</p>
            <h2>{{ c.repos.heading[0] }}<br />{{ c.repos.heading[1] }}</h2>
          </div>
          <p>{{ c.repos.copy }}</p>
        </div>

        <div class="case-repo-grid">
          <article
            v-for="repository in c.repos.items"
            :key="repository.name"
            class="case-repo"
            :class="{ 'is-speedlab': repository.speedlab }"
          >
            <RouterLink
              v-if="repository.speedlab"
              class="case-repo-group"
              :to="{ hash: '#retro-speedlab' }"
            >
              {{ c.repos.speedlabLink }}
            </RouterLink>
            <span v-else class="case-repo-group">{{ repository.group }}</span>
            <h3>
              <a
                :href="`${GITHUB_URL}/${repository.name}`"
                target="_blank"
                rel="noopener noreferrer"
              >{{ repository.name }} <span aria-hidden="true">↗</span></a>
            </h3>
            <p>{{ repository.description }}</p>
            <div class="case-repo-meta">
              <span>{{ repository.stack.join(' · ') }}</span>
              <span>{{ repository.license }}</span>
            </div>
          </article>
        </div>

        <div class="case-link-row">
          <a
            class="text-link"
            :href="GITHUB_URL"
            target="_blank"
            rel="noopener noreferrer"
          >{{ c.repos.allRepos }}</a>
        </div>
      </div>
    </section>

    <section id="retro-speedlab" class="wrap case-overview">
      <aside class="case-facts">
        <p class="eyebrow">{{ c.overview.factsEyebrow }}</p>
        <dl>
          <div v-for="fact in c.overview.facts" :key="fact.term"><dt>{{ fact.term }}</dt><dd>{{ fact.value }}</dd></div>
          <div><dt>{{ c.overview.statusTerm }}</dt><dd><span class="status-dot" /> {{ c.overview.statusValue }}</dd></div>
        </dl>
      </aside>

      <div class="case-narrative">
        <p class="eyebrow">{{ c.overview.eyebrow }}</p>
        <h2>{{ c.overview.heading }}</h2>
        <p class="case-lead">{{ c.overview.lead }}</p>
        <p v-for="(paragraph, index) in c.overview.paragraphs" :key="index">{{ paragraph }}</p>
        <div class="case-link-row">
          <a
            class="button button-primary"
            href="https://www.retrospeedlab.com/"
            target="_blank"
            rel="noopener noreferrer"
          >{{ c.overview.visitLab }}</a>
          <a
            class="text-link"
            href="https://www.retrospeedlab.com/tech-stack"
            target="_blank"
            rel="noopener noreferrer"
          >{{ c.overview.engineersPage }}</a>
        </div>
      </div>
    </section>

    <section class="wrap case-disciplines">
      <div class="section-heading split-heading">
        <div>
          <p class="eyebrow">{{ c.disciplines.eyebrow }}</p>
          <h2>{{ c.disciplines.heading[0] }}<br />{{ c.disciplines.heading[1] }}</h2>
        </div>
        <p>{{ c.disciplines.copy }}</p>
      </div>

      <div class="case-discipline-grid">
        <article v-for="discipline in c.disciplines.items" :key="discipline.label">
          <span>{{ discipline.label }}</span>
          <h3>{{ discipline.title }}</h3>
          <p class="case-discipline-lead">{{ discipline.lead }}</p>
          <ul>
            <li v-for="concept in discipline.concepts" :key="concept.name">
              <strong>{{ concept.name }}</strong> {{ concept.text }}
            </li>
          </ul>
          <p class="case-discipline-value"><strong>{{ c.disciplines.valueLabel }}</strong> {{ discipline.value }}</p>
        </article>
      </div>
    </section>

    <section class="wrap case-gallery">
      <div class="section-heading split-heading">
        <div>
          <p class="eyebrow">{{ c.gallery.eyebrow }}</p>
          <h2>{{ c.gallery.heading[0] }}<br />{{ c.gallery.heading[1] }}</h2>
        </div>
        <p>{{ c.gallery.copy }}</p>
      </div>
      <div class="case-gallery-grid">
        <figure>
          <div class="case-gallery-image">
            <img :src="labImage" :alt="c.gallery.lab.alt" width="1309" height="1348" loading="lazy" />
          </div>
          <figcaption>
            <span>{{ c.gallery.lab.label }}</span>
            <p>{{ c.gallery.lab.caption }}</p>
          </figcaption>
        </figure>
        <figure>
          <div class="case-gallery-image">
            <img :src="methodImage" :alt="c.gallery.method.alt" width="1309" height="1348" loading="lazy" />
          </div>
          <figcaption>
            <span>{{ c.gallery.method.label }}</span>
            <p>{{ c.gallery.method.caption }}</p>
          </figcaption>
        </figure>
      </div>
    </section>

    <section class="case-system-section">
      <div class="wrap">
        <div class="section-heading split-heading">
          <div>
            <p class="eyebrow">{{ c.system.eyebrow }}</p>
            <h2>{{ c.system.heading[0] }}<br />{{ c.system.heading[1] }}</h2>
          </div>
          <p>{{ c.system.copy }}</p>
        </div>

        <div class="speedlab-system" :aria-label="c.system.ariaLabel">
          <div class="system-head">
            <span>{{ c.system.head }}</span>
            <span><i /> {{ c.system.operational }}</span>
          </div>
          <ol class="system-stages">
            <li
              v-for="(stage, index) in c.system.stages"
              :key="index"
              :class="{ 'decision-stage': index === 3 }"
              :style="{ '--stage': index }"
            >
              <div class="stage-top">
                <span class="stage-number">{{ pad(index) }}</span>
                <div class="stage-cogs" aria-hidden="true"><i>⚙</i><i>⚙</i></div>
              </div>
              <div class="data-channel" aria-hidden="true"><i /><i /><i /></div>
              <strong>{{ stage.title }}</strong>
              <small>{{ stage.tools }}</small>
              <div v-if="index === 3" class="decision-gate" :aria-label="c.system.gateAria">
                <span>{{ c.system.gatePass }}</span><span>{{ c.system.gateFail }}</span>
              </div>
              <em v-else>{{ stage.result }}</em>
            </li>
          </ol>
          <div class="system-foot">
            <span v-for="item in c.system.foot" :key="item">{{ item }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="wrap case-evidence">
      <div class="section-heading split-heading">
        <div>
          <p class="eyebrow">{{ c.evidence.eyebrow }}</p>
          <h2>{{ c.evidence.heading[0] }}<br />{{ c.evidence.heading[1] }}</h2>
        </div>
        <p>{{ c.evidence.copy }}</p>
      </div>

      <div class="case-evidence-grid">
        <article v-for="(item, index) in c.evidence.items" :key="index">
          <span>{{ pad(index) }}</span>
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </article>
      </div>
    </section>

    <section class="case-closing">
      <div class="wrap">
        <p class="eyebrow">{{ c.closing.eyebrow }}</p>
        <h2>{{ c.closing.heading }}<br /><em>{{ c.closing.accent }}</em></h2>
        <p>{{ c.closing.copy }}</p>
        <div class="case-link-row">
          <a
            class="button case-button-light"
            href="https://www.retrospeedlab.com/tech-stack"
            target="_blank"
            rel="noopener noreferrer"
          >{{ c.closing.engineersPage }}</a>
          <a
            class="case-plain-link"
            :href="`${GITHUB_URL}/retro-speedlab-core`"
            target="_blank"
            rel="noopener noreferrer"
          >{{ c.closing.engine }}</a>
        </div>
      </div>
    </section>
  </div>
</template>
