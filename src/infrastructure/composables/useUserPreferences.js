import { useState, useCookie } from '#imports'

const STORAGE_KEYS = {
  THEME: 'user-theme',
  LANGUAGE: 'user-language',
}

const DEFAULT_PREFERENCES = {
  theme: 'dark',
  language: 'en',
}

export function useUserPreferences() {
  const themeCookie = useCookie(STORAGE_KEYS.THEME, { default: () => DEFAULT_PREFERENCES.theme })
  const languageCookie = useCookie(STORAGE_KEYS.LANGUAGE, { default: () => DEFAULT_PREFERENCES.language })

  const theme = useState('theme', () => themeCookie.value)
  const language = useState('language', () => languageCookie.value)

  function saveTheme(newTheme) {
    theme.value = newTheme
    themeCookie.value = newTheme
  }

  function saveLanguage(newLanguage) {
    language.value = newLanguage
    languageCookie.value = newLanguage
  }

  return {
    theme,
    language,
    saveTheme,
    saveLanguage,
  }
}
