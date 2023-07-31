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
    commonjsOptions: {
      transformMixedEsModules: true,
      // include: [/linked-dep/, /node_modules/],
    },
    optimizeDeps: {
      exclude: ['vue-demi', '@vite/client', '@vite/env'],
    }
  },
})

