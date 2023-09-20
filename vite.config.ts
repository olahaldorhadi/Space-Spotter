import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/project1', 
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
