
import path from 'path';

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE || 'http://localhost:3001',
    },
  },

  nitro: {
    devProxy: {
      '/api/': {
        target: 'http://localhost:3001', 
        changeOrigin: true,
        pathRewrite: { '^/api/': '/api/' },
      },
    },
  },

  css: [
    '@/assets/css/tailwind.css',
    '@/assets/css/global.css' 
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    '@primevue/nuxt-module'
  ],
  primevue: {
      options: {
          unstyled: true
      },
      importPT: { from: path.resolve(__dirname, './presets/aura/') } 

  },

  compatibilityDate: '2024-10-07',
});