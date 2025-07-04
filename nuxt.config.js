import { fileURLToPath } from 'url'
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({

  modules: [
    '@nuxt/eslint',
    '@nuxt/test-utils/module',
    '@nuxtjs/i18n',
    '@nuxtjs/robots',
  ],
  ssr: true,

  css: ['@/styles/normalize.min.css', '@/styles/tokens.css', '@/styles/main.css', '@/styles/fonts.css'],
  srcDir: 'src/',
  compatibilityDate: '2024-07-28',

  eslint: {
    config: {
      stylistic: true,
    },
  },

  i18n: {
    locales: ['en', 'es', 'cat'],
    defaultLocale: 'en',
    // Explicitly resolve the i18n config file from the project root, since srcDir is set to 'src/' and we want to keep i18n.config.js at the root.
    vueI18n: fileURLToPath(new URL('./i18n.config.js', import.meta.url)),
    bundle: {
      optimizeTranslationDirective: true,
    },
  },
})
