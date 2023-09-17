import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/ntnu': {
        target: 'https://tp.educloud.no/ntnu',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/ntnu/, '')
      }
    }
  }
})
