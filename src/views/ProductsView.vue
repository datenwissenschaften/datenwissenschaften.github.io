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
            <span class="status-dot" />
            {{ c.statusLive }}
          </p>
          <ul class="product-highlights">
            <li v-for="highlight in product.highlights" :key="highlight">{{ highlight }}</li>
          </ul>
          <p class="product-description">{{ product.description }}</p>
          <a :href="product.url" target="_blank" rel="noopener noreferrer">
            {{ c.visit(product.domain) }} <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div class="product-media">
          <figure class="product-shot">
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
              v-else
              :src="product.image"
              :alt="product.imageAlt"
              :width="product.imageSize?.width"
              :height="product.imageSize?.height"
              loading="lazy"
            />
          </figure>
        </div>
      </article>
    </section>
  </div>
</template>
