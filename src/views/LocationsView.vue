<script setup lang="ts">
import PageIntro from '../components/PageIntro.vue'
import saalfeldImage from '../assets/img/locations/saalfeld.webp'
import somersetWestImage from '../assets/img/locations/somerset-west.webp'
import tallinnImage from '../assets/img/locations/tallinn.webp'

const locations = [
  {
    number: '01',
    label: 'Headquarters',
    city: 'Tallinn',
    country: 'Estonia',
    address: ['Sepapaja tn 6', '15551 Tallinn', 'Estonia'],
    description:
      'Our registered headquarters in Estonia connects the practice to one of Europe’s most digitally ambitious business environments.',
    image: tallinnImage,
    imageAlt: 'Panoramic view across Tallinn, Estonia',
    photoAuthor: 'ZeevoX',
    photoUrl: 'https://commons.wikimedia.org/wiki/File:Panoramic_View_of_Tallinn,_Estonia.jpg',
    mapUrl: 'https://www.google.com/maps?q=Sepapaja+tn+6,+15551+Tallinn,+Estonia&output=embed',
    directionsUrl:
      'https://www.google.com/maps/search/?api=1&query=Sepapaja%20tn%206%2C%2015551%20Tallinn%2C%20Estonia',
  },
  {
    number: '02',
    label: 'Germany',
    city: 'Saalfeld',
    country: 'Germany',
    address: ['Frankenweg 26', '07318 Saalfeld', 'Germany'],
    description:
      'A base in the heart of Germany, well placed for focused collaboration with teams across Central Europe.',
    image: saalfeldImage,
    imageAlt: 'Saalfeld market square with St John’s Church rising above the historic buildings',
    photoAuthor: 'Kora27',
    photoUrl:
      'https://commons.wikimedia.org/wiki/File:Marktplatz_in_Saalfeld,_Th%C3%BCringen_2H1A4922WI.jpg',
    mapUrl: 'https://www.google.com/maps?q=Frankenweg+26,+07318+Saalfeld,+Germany&output=embed',
    directionsUrl:
      'https://www.google.com/maps/search/?api=1&query=Frankenweg%2026%2C%2007318%20Saalfeld%2C%20Germany',
  },
  {
    number: '03',
    label: 'South Africa',
    city: 'Somerset West',
    country: 'South Africa',
    address: ['34 Anura Road', 'Sitari Country Estate', '7130 Somerset West', 'South Africa'],
    description:
      'Our South African base brings the same close, senior collaboration to clients working across the Southern Hemisphere.',
    image: somersetWestImage,
    imageAlt: 'Aerial view of Somerset West beneath the Helderberg mountain range',
    photoAuthor: 'Aerial Picture and Video',
    photoUrl:
      'https://commons.wikimedia.org/wiki/File:Helderberg_Mountain_Range,_Somerset_West,_South_Africa.JPG',
    mapUrl:
      'https://www.google.com/maps?q=34+Anura+Road,+Sitari+Country+Estate,+7130+Somerset+West,+South+Africa&output=embed',
    directionsUrl:
      'https://www.google.com/maps/search/?api=1&query=34%20Anura%20Road%2C%20Sitari%20Country%20Estate%2C%207130%20Somerset%20West%2C%20South%20Africa',
  },
]
</script>

<template>
  <div>
    <PageIntro
      title="Three places. One"
      accent="connected practice."
      copy="From Northern Europe to the Cape, our locations keep us close to the people and organisations we work with—across borders, time zones and ambitious ideas."
    >
      <template #eyebrow>Where to find us</template>
    </PageIntro>

    <section class="locations-opening wrap" aria-labelledby="locations-opening-title">
      <p class="eyebrow">Local presence · Global work</p>
      <div>
        <h2 id="locations-opening-title">Close to the work, wherever it happens.</h2>
        <p>
          Our footprint spans the Baltic, Central Europe and Southern Africa. Each location is a
          practical base for direct collaboration, while our work continues wherever a valuable data
          problem needs solving.
        </p>
      </div>
    </section>

    <section class="locations-list wrap" aria-label="Our locations">
      <article v-for="location in locations" :key="location.city" class="location-card">
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
            Open in Google Maps <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div class="location-media">
          <figure class="location-photo">
            <img :src="location.image" :alt="location.imageAlt" loading="lazy" />
            <figcaption>
              Photo:
              <a :href="location.photoUrl" target="_blank" rel="noopener noreferrer">{{ location.photoAuthor }}</a>
              <span aria-hidden="true">·</span>
              <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">
                CC BY-SA 4.0
              </a>
            </figcaption>
          </figure>

          <div class="location-map">
            <div class="location-map-label">
              <span>Map</span>
              <strong>{{ location.city }}</strong>
            </div>
            <iframe
              :src="location.mapUrl"
              :title="`Map showing our ${location.city} location`"
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
