<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { RouterLink } from 'vue-router'
import posts from 'virtual:blog'
import PageIntro from '../components/PageIntro.vue'
import { BLOG_DESCRIPTION, blogUrl, FEED_PATH, postDate, postPath } from '../blog'
import { blogIndexHead } from '../seo'

useHead(blogIndexHead(posts))
</script>

<template>
  <div>
    <PageIntro title="Engineering" accent="notes." :copy="BLOG_DESCRIPTION">
      <template #eyebrow>Blog</template>
    </PageIntro>
    <section class="wrap blog-list">
      <article v-for="post in posts" :key="post.slug" class="blog-card">
        <RouterLink :to="postPath(post.slug)" tabindex="-1" aria-hidden="true">
          <img :src="post.cover" :alt="post.coverAlt" width="1600" height="900" loading="lazy" decoding="async" />
        </RouterLink>
        <div>
          <time class="eyebrow" :datetime="post.date">{{ postDate(post.date) }}</time>
          <h2><RouterLink :to="postPath(post.slug)">{{ post.title }}</RouterLink></h2>
          <p>{{ post.description }}</p>
        </div>
      </article>
      <a class="text-link" :href="blogUrl(FEED_PATH)">RSS feed</a>
    </section>
  </div>
</template>
