// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: true,
  experimental: {
    reactivityTransform: true
  },
  modules: [// ...
  '@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt', '@nuxtjs/tailwindcss'],
})
