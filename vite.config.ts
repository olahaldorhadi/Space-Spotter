/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/project1',
    plugins: [react()],
    server: {
        proxy: {
            '/ntnu': {
                target: 'https://tp.educloud.no/ntnu',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/ntnu/, ''),
            },
        },
    },
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ['./src/setup.ts'],
    },
})
