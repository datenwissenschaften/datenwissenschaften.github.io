<script setup lang="ts">
import PageIntro from '../components/PageIntro.vue'
</script>

<template>
  <div>
    <PageIntro index="04" title="Let’s find the" accent="highest-leverage move." copy="Tell me what you are trying to improve, automate or understand. An initial conversation is direct, useful and free of sales theatre.">
      <template #eyebrow>Start a project</template>
    </PageIntro>
    <section class="wrap contact-grid">
      <div class="contact-primary">
        <p class="eyebrow">Direct contact</p>
        <a class="email-link" href="mailto:martin.franke@datenwissenschaften.com">martin.franke@<br />datenwissenschaften.com</a>
        <p>Prefer a call? Choose a time that works for you.</p>
        <a class="button button-primary" href="https://calendly.com/datenwissenschaften" target="_blank" rel="noopener">Open my calendar ↗</a>
      </div>
      <aside class="contact-aside">
        <div><p class="eyebrow">A useful first message includes</p><ul><li>The decision or process you want to improve</li><li>What data and systems already exist</li><li>What a valuable outcome would look like</li><li>Your broad timing</li></ul></div>
        <div><p class="eyebrow">Based in</p><p>Estonia<br />Available for focused work globally</p></div>
        <div><p class="eyebrow">Response</p><p>Usually within two business days.</p></div>
      </aside>
    </section>
    <section class="contact-note wrap">
      <span>Clear scope.</span><span>Senior attention.</span><span>Lean delivery.</span>
    </section>
  </div>
</template>
