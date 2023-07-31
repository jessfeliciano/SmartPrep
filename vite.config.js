// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   // build: {
//   //   // outDir: './dist',
//   //   base: '/SmartPrep/',
//   //   rollupOptions: {
//   //     output: {
//   //       // Ensures the MIME type is set to 'application/javascript'
//   //       mimeTypes: {
//   //         'js': 'application/javascript',
//   //       },
//   //     },
//   //   },
//   // },
// })

// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: '/',
  }

  if (command !== 'serve') {
    config.base = '/SmartPrep/'
  }

  return config
})