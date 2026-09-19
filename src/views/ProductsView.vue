<script setup lang="ts">
import PageIntro from '../components/PageIntro.vue'
import knotbaseImage from '../assets/img/products/knotbase.webp'
import helderbergImage from '../assets/img/products/helderberg-remote.webp'

const products = [
  {
    number: '01',
    label: 'AI product',
    name: 'Knotbase',
    domain: 'knotbase.io',
    tagline: 'Answer more questions. Win more customers.',
    description:
      'Knotbase turns the knowledge already on a company’s website into an AI assistant that answers visitors and helps generate leads around the clock. It’s a self-directed build, run outside client engagements, applying the same practical approach to retrieval and deployment we bring to production AI work.',
    highlights: ['Website knowledge base as the source of truth', 'Conversational lead capture', 'No technical setup required'],
    image: knotbaseImage,
    imageAlt: 'Knotbase.io homepage showing an AI chat assistant answering a customer question',
    url: 'https://knotbase.io/',
  },
  {
    number: '02',
    label: 'Local community',
    name: 'Helderberg Remote',
    domain: 'helderbergremote.com',
    tagline: 'Work remotely. Connect locally.',
    description:
      'A community for remote workers, digital nomads, freelancers and founders around Somerset West, Strand, Gordon’s Bay and Stellenbosch—grown from the same Helderberg base as our South African location. Meetups and a WhatsApp community turn remote work into something less solitary.',
    highlights: ['WhatsApp community', 'Regular local meetups', 'Somerset West · Strand · Gordon’s Bay · Stellenbosch'],
    image: helderbergImage,
    imageAlt: 'Helderberg Remote homepage with the community logo and a call to join via WhatsApp',
    url: 'https://www.helderbergremote.com/',
  },
  {
    number: '03',
    label: 'Smart home AI',
    name: 'Sitari.life',
    domain: 'sitari.life',
    tagline: 'Smart homes. Shared savings.',
    description:
      'An early-stage concept for AI-driven home automation that helps local communities—starting near the Sitari estate by our South African base—monitor and optimise shared resources. The goal is straightforward: less gas, water and electricity wasted, without residents having to think about it.',
    highlights: ['Water, gas & electricity monitoring', 'AI-driven usage optimisation', 'Built for local community estates'],
    placeholder: true,
  },
]
</script>

<template>
  <div>
    <PageIntro
      title="Beyond client work,"
      accent="a few things we build ourselves."
      copy="Alongside consulting engagements, we run a small set of independent ventures—products shaped by the same data and AI practice, built and operated on our own time."
    >
      <template #eyebrow>Side projects</template>
    </PageIntro>

    <section class="products-opening wrap" aria-labelledby="products-opening-title">
      <p class="eyebrow">Independent ventures · Live and in development</p>
      <div>
        <h2 id="products-opening-title">Practice applied to our own ideas.</h2>
        <p>
          These aren’t client deliverables—they’re products we build and run ourselves, some already
          live, some still taking shape, all proof that the same thinking behind our consulting work
          holds up outside it too.
        </p>
      </div>
    </section>

    <section class="products-list wrap" aria-label="Our products">
      <article v-for="product in products" :key="product.name" class="product-card">
        <div class="product-copy">
          <span class="product-number">{{ product.number }}</span>
          <p class="eyebrow">{{ product.label }}</p>
          <h2>{{ product.name }}</h2>
          <p class="product-tagline">{{ product.tagline }}</p>
          <p class="product-status">
            <span class="status-dot" :class="{ 'status-dot-pending': product.placeholder }" />
            {{ product.placeholder ? 'In development' : 'Live' }}
          </p>
          <ul class="product-highlights">
            <li v-for="highlight in product.highlights" :key="highlight">{{ highlight }}</li>
          </ul>
          <p class="product-description">{{ product.description }}</p>
          <a v-if="!product.placeholder" :href="product.url" target="_blank" rel="noopener noreferrer">
            Visit {{ product.domain }} <span aria-hidden="true">↗</span>
          </a>
          <span v-else class="product-pending-note">Launching soon</span>
        </div>

        <div class="product-media">
          <figure class="product-shot" :class="{ 'placeholder-shot': product.placeholder }">
            <div class="browser-chrome" aria-hidden="true">
              <span /><span /><span />
              <div class="browser-url">{{ product.domain }}</div>
            </div>
            <img v-if="!product.placeholder" :src="product.image" :alt="product.imageAlt" loading="lazy" />
            <div v-else class="placeholder-visual">
              <svg class="placeholder-icon" viewBox="0 0 64 64" aria-hidden="true">
                <path d="M10 32 32 14l22 18" />
                <path d="M16 28v22h32V28" />
                <path d="M27 50V37h10v13" />
              </svg>
              <div class="placeholder-badges">
                <span title="Water">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 3.5c3.4 4.4 5.5 7.7 5.5 10.7a5.5 5.5 0 1 1-11 0c0-3 2.1-6.3 5.5-10.7Z" />
                  </svg>
                </span>
                <span title="Gas">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.5c.5 2.3-.8 3.4-1.6 4.8 1.5-.3 2.4-1.4 2.8-2.8 1.7 2 2.7 4.6 2.7 7a5.9 5.9 0 1 1-11.8 0C4.1 8 6.7 4.9 12 2.5Z" />
                  </svg>
                </span>
                <span title="Electricity">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M13 2 4.5 13.5H10L9 21.5 18 10H12l1-8Z" />
                  </svg>
                </span>
              </div>
              <p class="placeholder-caption">Water · Gas · Electricity</p>
            </div>
          </figure>
        </div>
      </article>
    </section>
  </div>
</template>
