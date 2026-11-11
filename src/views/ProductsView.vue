<script setup lang="ts">
import PageIntro from '../components/PageIntro.vue'
import productsContent from '../content/products'
import { useContent } from '../i18n'

const c = useContent(productsContent)
</script>

<template>
  <div>
    <PageIntro :title="c.title" :accent="c.accent" :copy="c.copy">
      <template #eyebrow>{{ c.eyebrow }}</template>
    </PageIntro>

    <section class="products-opening wrap" aria-labelledby="products-opening-title">
      <p class="eyebrow">{{ c.opening.eyebrow }}</p>
      <div>
        <h2 id="products-opening-title">{{ c.opening.title }}</h2>
        <p>{{ c.opening.copy }}</p>
      </div>
    </section>

    <section class="products-list wrap" :aria-label="c.listLabel">
      <article v-for="product in c.products" :key="product.name" class="product-card">
        <div class="product-copy">
          <span class="product-number">{{ product.number }}</span>
          <p class="eyebrow">{{ product.label }}</p>
          <h2 :class="{ 'product-title-compact': product.contain }">{{ product.name }}</h2>
          <p class="product-tagline">{{ product.tagline }}</p>
          <p class="product-status">
            <span class="status-dot" :class="{ 'status-dot-pending': product.placeholder }" />
            {{ product.placeholder ? c.statusPending : c.statusLive }}
          </p>
          <ul class="product-highlights">
            <li v-for="highlight in product.highlights" :key="highlight">{{ highlight }}</li>
          </ul>
          <p class="product-description">{{ product.description }}</p>
          <a v-if="!product.placeholder" :href="product.url" target="_blank" rel="noopener noreferrer">
            {{ c.visit(product.domain) }} <span aria-hidden="true">↗</span>
          </a>
          <span v-else class="product-pending-note">{{ c.launchingSoon }}</span>
        </div>

        <div class="product-media">
          <figure class="product-shot" :class="{ 'placeholder-shot': product.placeholder }">
            <div class="browser-chrome" aria-hidden="true">
              <span /><span /><span />
              <div class="browser-url">{{ product.domain }}</div>
            </div>
            <div v-if="product.contain" class="amazon-mock">
              <div class="amazon-mock-cover">
                <img
                  :src="product.image"
                  :alt="product.imageAlt"
                  :width="product.imageSize?.width"
                  :height="product.imageSize?.height"
                  loading="lazy"
                />
              </div>
              <div class="amazon-mock-details">
                <span class="amazon-mock-stars" aria-hidden="true">★★★★★</span>
                <span class="amazon-mock-line title-line" />
                <span class="amazon-mock-line title-line short" />
                <span class="amazon-mock-line" />
                <span class="amazon-mock-line" />
                <span class="amazon-mock-line short" />
                <a class="amazon-mock-cta" :href="product.url" target="_blank" rel="noopener noreferrer">{{ c.buyNow }}</a>
                <span class="amazon-mock-cta secondary" aria-hidden="true">{{ c.addToCart }}</span>
              </div>
            </div>
            <img
              v-else-if="!product.placeholder"
              :src="product.image"
              :alt="product.imageAlt"
              :width="product.imageSize?.width"
              :height="product.imageSize?.height"
              loading="lazy"
            />
            <div v-else class="placeholder-visual">
              <svg class="placeholder-icon" viewBox="0 0 64 64" aria-hidden="true">
                <path d="M10 32 32 14l22 18" />
                <path d="M16 28v22h32V28" />
                <path d="M27 50V37h10v13" />
              </svg>
              <div class="placeholder-badges">
                <span :title="c.resources.water">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 3.5c3.4 4.4 5.5 7.7 5.5 10.7a5.5 5.5 0 1 1-11 0c0-3 2.1-6.3 5.5-10.7Z" />
                  </svg>
                </span>
                <span :title="c.resources.gas">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.5c.5 2.3-.8 3.4-1.6 4.8 1.5-.3 2.4-1.4 2.8-2.8 1.7 2 2.7 4.6 2.7 7a5.9 5.9 0 1 1-11.8 0C4.1 8 6.7 4.9 12 2.5Z" />
                  </svg>
                </span>
                <span :title="c.resources.electricity">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M13 2 4.5 13.5H10L9 21.5 18 10H12l1-8Z" />
                  </svg>
                </span>
              </div>
              <p class="placeholder-caption">{{ c.resources.water }} · {{ c.resources.gas }} · {{ c.resources.electricity }}</p>
            </div>
          </figure>
        </div>
      </article>
    </section>
  </div>
</template>
