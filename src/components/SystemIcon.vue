<script setup lang="ts">
defineProps<{
  name: 'database' | 'cloud' | 'cicd' | 'ai'
}>()
</script>

<template>
  <svg class="system-icon" viewBox="0 0 24 24" aria-hidden="true">
    <g v-if="name === 'database'">
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
    </g>
    <path v-else-if="name === 'cloud'" d="M7.5 18.5h9.2a4.3 4.3 0 0 0 .4-8.6A5.8 5.8 0 0 0 6.2 8.3a5.1 5.1 0 0 0 1.3 10.2Z" />
    <g v-else-if="name === 'cicd'">
      <path d="M7 7h8.5a4 4 0 0 1 4 4v1M17 4l-3 3 3 3" />
      <path d="M17 17H8.5a4 4 0 0 1-4-4v-1M7 20l3-3-3-3" />
    </g>
    <g v-else>
      <circle cx="12" cy="12" r="2.5" />
      <circle cx="5" cy="7" r="1.5" />
      <circle cx="19" cy="6" r="1.5" />
      <circle cx="6" cy="18" r="1.5" />
      <circle cx="19" cy="18" r="1.5" />
      <path d="m7 8 3 2.5m4-1 3.5-2.5M10.2 14 7 17m7-3 3.7 3" />
    </g>
  </svg>
</template>

<style scoped>
.system-icon {
  width: 15px;
  height: 15px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.6;
}
</style>
