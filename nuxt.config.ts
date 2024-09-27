// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      unsplashSecretKey: process.env.UNSPLASH_SECRET_KEY,
      unsplashAccessKey: process.env.UNSPLASH_ACCESS_KEY
    }
  },
  compatibilityDate: '2024-04-03',
  experimental: {
    renderJsonPayloads: false,
  },
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
})
