<script setup lang="ts">
import PageIntro from '../components/PageIntro.vue'
import contactContent from '../content/contact'
import { CALENDLY_URL, EMAIL } from '../content/site'
import { useContent } from '../i18n'

const c = useContent(contactContent)
const [emailUser, emailDomain] = EMAIL.split('@')
</script>

<template>
  <div>
    <PageIntro :title="c.intro.title" :accent="c.intro.accent" :copy="c.intro.copy">
      <template #eyebrow>{{ c.intro.eyebrow }}</template>
    </PageIntro>
    <section class="wrap contact-grid">
      <div class="contact-primary">
        <p class="eyebrow">{{ c.direct }}</p>
        <a class="email-link" :href="`mailto:${EMAIL}`">{{ emailUser }}@<br />{{ emailDomain }}</a>
        <p>{{ c.callPrompt }}</p>
        <a class="button button-primary" :href="CALENDLY_URL" target="_blank" rel="noopener" :aria-label="c.calendarAria">{{ c.calendar }}</a>
      </div>
      <aside class="contact-aside">
        <div>
          <p class="eyebrow">{{ c.firstMessage.title }}</p>
          <ul><li v-for="item in c.firstMessage.items" :key="item">{{ item }}</li></ul>
        </div>
        <div><p class="eyebrow">{{ c.collaboration.title }}</p><p>{{ c.collaboration.text }}</p></div>
        <div><p class="eyebrow">{{ c.response.title }}</p><p>{{ c.response.text }}</p></div>
      </aside>
    </section>
    <section class="contact-note wrap">
      <span v-for="item in c.note" :key="item">{{ item }}</span>
    </section>
  </div>
</template>
