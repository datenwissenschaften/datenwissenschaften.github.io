<script setup lang="ts">
defineProps<{
  title: string
  accent?: string
  copy: string
}>()
</script>

<template>
  <section class="page-intro wrap">
    <div>
      <p class="eyebrow"><slot name="eyebrow" /></p>
      <h1>{{ title }} <em v-if="accent">{{ accent }}</em></h1>
      <p class="page-lead">{{ copy }}</p>
    </div>
  </section>
</template>
