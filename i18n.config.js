export default defineI18nConfig(() => ({
  legacy: false,
  locales: ['en', 'es', 'cat'],
  defaultLocale: 'en',
  detectBrowserLanguage: true,
  messages: {
    en: {
      test: 'english ...',
    },
    es: {
      test: 'spanish ...',
    },
    cat: {
      test: 'catalan ...',
    },
  },
}))
