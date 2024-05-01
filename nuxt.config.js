import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
  ],
  eslint: {
    config: {
      stylistic: true,
    },
  },
  css: ['~/src/styles/reset.css'],
})
