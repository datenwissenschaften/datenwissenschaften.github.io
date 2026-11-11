<script setup lang="ts">
import PageIntro from '../components/PageIntro.vue'
import { useContent } from '../i18n'
import { EMAIL } from '../content/site'
import content from '../content/imprint'

const c = useContent(content)
const year = new Date().getFullYear()
</script>

<template>
  <div>
    <PageIntro :title="c.intro.title" :accent="c.intro.accent" :copy="c.intro.copy">
      <template #eyebrow>{{ c.intro.eyebrow }}</template>
    </PageIntro>
    <section class="wrap legal-grid">
      <aside :aria-label="c.nav.label">
        <a href="#company">{{ c.nav.company }}</a>
        <a href="#intellectual-property">{{ c.nav.ip }}</a>
        <a href="#privacy">{{ c.nav.privacy }}</a>
        <a href="#rights">{{ c.nav.rights }}</a>
        <a href="#cookies">{{ c.nav.cookies }}</a>
      </aside>
      <div class="legal-copy">
        <section id="company">
          <p class="eyebrow">{{ c.company.eyebrow }}</p>
          <h2>{{ c.company.heading }}</h2>
          <address>
            <strong>Dr. Franke Datenwissenschaften OÜ</strong><br />
            Sepapaja tn 6<br />
            15551 Tallinn<br />
            {{ c.company.country }}
          </address>
          <dl class="legal-facts">
            <div v-for="fact in c.company.facts" :key="fact.term">
              <dt>{{ fact.term }}</dt>
              <dd>{{ fact.value }}</dd>
            </div>
          </dl>
          <h3>{{ c.company.contactHeading }}</h3>
          <p>
            {{ c.company.emailLabel }}
            <a :href="`mailto:${EMAIL}`">{{ EMAIL }}</a>
          </p>
          <p>{{ c.company.note }}</p>
        </section>

        <section id="intellectual-property">
          <p class="eyebrow">{{ c.ip.eyebrow }}</p>
          <h2>{{ c.ip.heading }}</h2>
          <template v-for="block in c.ip.blocks" :key="block.title">
            <h3>{{ block.title }}</h3>
            <p>{{ block.text }}</p>
          </template>
          <p>
            {{ c.ip.questions.before }}
            <a :href="`mailto:${EMAIL}`">{{ EMAIL }}</a>{{ c.ip.questions.after }}
          </p>
        </section>

        <section id="privacy">
          <p class="eyebrow">{{ c.privacy.eyebrow }}</p>
          <h2>{{ c.privacy.heading }}</h2>
          <p>{{ c.privacy.intro }}</p>
          <ol class="legal-principles">
            <li v-for="principle in c.privacy.principles" :key="principle.title">
              <h3>{{ principle.title }}</h3>
              <p v-for="(paragraph, index) in principle.paragraphs" :key="index">{{ paragraph }}</p>
            </li>
          </ol>
        </section>

        <section id="rights">
          <p class="eyebrow">{{ c.rights.eyebrow }}</p>
          <h2>{{ c.rights.heading }}</h2>
          <ol class="legal-principles" :start="c.privacy.principles.length + 1">
            <li v-for="principle in c.rights.principles" :key="principle.title">
              <h3>{{ principle.title }}</h3>
              <p v-for="(paragraph, index) in principle.paragraphs" :key="index">{{ paragraph }}</p>
            </li>
            <li>
              <h3>{{ c.rights.dpo.title }}</h3>
              <p>
                {{ c.rights.dpo.before }}
                <a :href="`mailto:${EMAIL}`">{{ EMAIL }}</a>{{ c.rights.dpo.after }}
              </p>
            </li>
          </ol>
        </section>

        <section id="cookies">
          <p class="eyebrow">{{ c.cookies.eyebrow }}</p>
          <h2>{{ c.cookies.heading }}</h2>
          <ol class="legal-principles" :start="c.privacy.principles.length + c.rights.principles.length + 2">
            <li v-for="principle in c.cookies.principles" :key="principle.title">
              <h3>{{ principle.title }}</h3>
              <p v-for="(paragraph, index) in principle.paragraphs" :key="index">{{ paragraph }}</p>
            </li>
          </ol>
          <p>{{ c.cookies.thanks }}</p>
          <p class="legal-date">
            {{ c.cookies.effective }}<br />
            {{ c.cookies.reviewed }}<br />
            © 2024–{{ year }} Dr. Franke Datenwissenschaften OÜ. {{ c.cookies.rights }}
          </p>
        </section>
      </div>
    </section>
  </div>
</template>
