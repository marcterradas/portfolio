import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  srcDir: 'src/',
  modules: [
    '@nuxt/eslint',
    '@nuxt/test-utils/module',
    '@nuxtjs/i18n',
  ],
  eslint: {
    config: {
      stylistic: true,
    },
  },
  css: ['~/styles/normalize.css'],
})
