import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  srcDir: 'src/',
  ssr: true,
  modules: [
    '@nuxt/eslint',
    '@nuxt/test-utils/module',
    '@nuxtjs/i18n',
  ],
  i18n: {
    locales: ['en', 'es', 'cat'],
    defaultLocale: 'en',
    vueI18n: './i18n.config.js',
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  css: ['@/styles/normalize.min.css', '@/styles/tokens.css', '@/styles/main.css', '@/styles/fonts.css'],
})
