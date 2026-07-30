<script setup lang="ts">
defineProps<{
  index?: string
  title: string
  accent?: string
  copy: string
}>()
</script>

<template>
  <section class="page-intro wrap" :class="{ 'page-intro-unindexed': !index }">
    <div v-if="index" class="page-intro-index">{{ index }} / 05</div>
    <div>
      <p class="eyebrow"><slot name="eyebrow" /></p>
      <h1>{{ title }} <em v-if="accent">{{ accent }}</em></h1>
      <p class="page-lead">{{ copy }}</p>
    </div>
  </section>
</template>
