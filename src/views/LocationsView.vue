<script setup lang="ts">
import PageIntro from '../components/PageIntro.vue'
import locationsContent from '../content/locations'
import { useContent } from '../i18n'

const c = useContent(locationsContent)
</script>

<template>
  <div>
    <PageIntro :title="c.title" :accent="c.accent" :copy="c.copy">
      <template #eyebrow>{{ c.eyebrow }}</template>
    </PageIntro>

    <section class="locations-opening wrap" aria-labelledby="locations-opening-title">
      <p class="eyebrow">{{ c.opening.eyebrow }}</p>
      <div>
        <h2 id="locations-opening-title">{{ c.opening.title }}</h2>
        <p>{{ c.opening.copy }}</p>
      </div>
    </section>

    <section class="locations-list wrap" :aria-label="c.listLabel">
      <article v-for="location in c.locations" :key="location.city" class="location-card">
        <div class="location-copy">
          <span class="location-number">{{ location.number }}</span>
          <p class="eyebrow">{{ location.label }}</p>
          <h2>{{ location.city }}</h2>
          <p class="location-country">{{ location.country }}</p>
          <address>
            <template v-for="line in location.address" :key="line">
              {{ line }}<br />
            </template>
          </address>
          <p class="location-description">{{ location.description }}</p>
          <a :href="location.directionsUrl" target="_blank" rel="noopener noreferrer">
            {{ c.openInMaps }} <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div class="location-media">
          <figure class="location-photo">
            <img
              :src="location.image"
              :alt="location.imageAlt"
              :width="location.imageSize.width"
              :height="location.imageSize.height"
              loading="lazy"
            />
            <figcaption>
              {{ c.photo }}
              <a :href="location.photoUrl" target="_blank" rel="noopener noreferrer">{{ location.photoAuthor }}</a>
              <span aria-hidden="true">·</span>
              <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">
                CC BY-SA 4.0
              </a>
            </figcaption>
          </figure>

          <div class="location-map">
            <div class="location-map-label">
              <span>{{ c.map }}</span>
              <strong>{{ location.city }}</strong>
            </div>
            <iframe
              :src="location.mapUrl"
              :title="c.mapTitle(location.city)"
              loading="lazy"
              allowfullscreen
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>
