import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  srcDir: 'src/',
  modules: [
    '@nuxt/eslint',
    '@nuxt/test-utils/module',
    '@nuxtjs/i18n',
  ],
  i18n: {
    vueI18n: './i18n.config.js',
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  css: ['~/styles/normalize.css'],
})
