import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  srcDir: 'src/',
  modules: [
    '@nuxt/eslint',
    '@nuxt/test-utils/module',
  ],
  eslint: {
    config: {
      stylistic: true,
    },
  },
  css: ['~/styles/normalize.css'],
})
