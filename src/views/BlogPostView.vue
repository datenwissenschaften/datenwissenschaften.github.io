<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import posts from 'virtual:blog'
import { BLOG_PATH, postDate } from '../blog'
import { notFoundHead, postHead } from '../seo'
import NotFoundView from './NotFoundView.vue'

const route = useRoute()
const post = computed(() => posts.find((candidate) => candidate.slug === route.params.slug))

useHead(computed(() => (post.value ? postHead(post.value) : notFoundHead('en'))))
</script>

<template>
  <article v-if="post" class="blog-post">
    <header class="wrap blog-post-header">
      <nav class="breadcrumbs" aria-label="Breadcrumb">
        <RouterLink :to="BLOG_PATH">Blog</RouterLink>
        <span aria-hidden="true">/</span>
        <time :datetime="post.date">{{ postDate(post.date) }}</time>
      </nav>
      <h1>{{ post.title }}</h1>
      <p class="page-lead">{{ post.description }}</p>
    </header>
    <img class="blog-cover wrap" :src="post.cover" :alt="post.coverAlt" width="1600" height="900" decoding="async" />
    <!-- eslint-disable-next-line vue/no-v-html -- rendered at build time from the repository's Markdown, with raw HTML off -->
    <div class="wrap blog-body" v-html="post.html" />
  </article>
  <NotFoundView v-else />
</template>
