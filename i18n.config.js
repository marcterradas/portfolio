import { defineI18nConfig } from '#imports'

import cat from '@/infrastructure/translations/cat.json'
import es from '@/infrastructure/translations/es.json'
import en from '@/infrastructure/translations/en.json'

export default defineI18nConfig(() => ({
  legacy: false,
  locales: ['en', 'es', 'cat'],
  defaultLocale: 'en',
  detectBrowserLanguage: true,
  messages: { en, es, cat },
}))
