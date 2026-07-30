<script setup lang="ts">
import PageIntro from '../components/PageIntro.vue'
</script>

<template>
  <div>
    <PageIntro index="05" title="Imprint &" accent="privacy." copy="Legal information and data protection details for Dr. Franke Datenwissenschaften OÜ.">
      <template #eyebrow>Legal</template>
    </PageIntro>
    <section class="wrap legal-grid">
      <aside>
        <a href="#company">Company details</a>
        <a href="#privacy">Privacy statement</a>
        <a href="#rights">Your rights</a>
      </aside>
      <div class="legal-copy">
        <section id="company">
          <h2>Company details</h2>
          <p><strong>Dr. Franke Datenwissenschaften OÜ</strong><br />Sepapaja tn 6<br />15551 Tallinn<br />Estonia</p>
          <p>Commercial Register Number: 16803592<br />VAT Identification Number: EE102649275</p>
          <p>Managing Director: Dr. Martin Franke<br />Email: <a href="mailto:martin.franke@datenwissenschaften.com">martin.franke@datenwissenschaften.com</a><br />Phone: +357-24 030320</p>
          <p>Responsible for content: Dr. Franke Datenwissenschaften OÜ</p>
        </section>
        <section>
          <h2>Copyright</h2>
          <p>The content, design and images on this website are the intellectual property of Dr. Franke Datenwissenschaften OÜ and are protected by copyright law. Reproduction or distribution beyond personal, non-commercial use requires prior written permission.</p>
        </section>
        <section id="privacy">
          <h2>Privacy statement</h2>
          <p>We are committed to safeguarding personal data in accordance with the General Data Protection Regulation (GDPR) and applicable data protection laws. Personal data is collected only for specified, lawful purposes and is limited to what is necessary.</p>
          <h3>Processing and security</h3>
          <p>Where personal data is processed, we ensure an appropriate lawful basis, keep information only as long as necessary and apply suitable technical and organisational measures against unauthorised access, loss or damage.</p>
          <h3>Data transfers</h3>
          <p>When personal data is transferred to third countries or international organisations, appropriate safeguards are used as required by GDPR.</p>
        </section>
        <section id="rights">
          <h2>Your rights</h2>
          <p>You may have the right to access, rectify, erase or restrict the processing of your data, to object to processing, and to data portability. To exercise these rights or ask a privacy question, contact <a href="mailto:martin.franke@datenwissenschaften.com">martin.franke@datenwissenschaften.com</a>.</p>
          <p class="legal-date">Last updated: July 2026</p>
        </section>
      </div>
    </section>
  </div>
</template>
