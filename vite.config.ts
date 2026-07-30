import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    watch: {
      // Avoid exhausting Linux's per-user inotify instance limit.
      usePolling: true,
      interval: 250,
    },
  },
})
