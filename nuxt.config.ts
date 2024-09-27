// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      unsplashSecretKey: process.env.UNSPLASH_SECRET_KEY,
      unsplashAccessKey: process.env.UNSPLASH_ACCESS_KEY
    }
  },
  app: {
    head: {
      title: 'Image Catalog',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },

      ],
    },
  },
  compatibilityDate: '2024-04-03',
  experimental: {
    renderJsonPayloads: false,
  },
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
})
