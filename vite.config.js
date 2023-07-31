import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // outDir: './dist',
    // base: '/SmartPrep/',
    rollupOptions: {
      output: {
        // Ensures the MIME type is set to 'application/javascript'
        mimeTypes: {
          'js': 'application/javascript',
        },
      },
    },
  },
})

