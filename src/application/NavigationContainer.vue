<script setup>
import { ref } from 'vue'
import { useI18n, useRuntimeConfig, useHead } from '#imports'
import config from '@/infrastructure/config.js'
import { useTheme } from '@/infrastructure/composables/useTheme.js'
import { useUserPreferences } from '@/infrastructure/composables/useUserPreferences.js'

const { theme, switchTheme } = useTheme()
const { saveTheme, saveLanguage } = useUserPreferences()

// Bind the theme value to the html tag attribute.
useHead({
  htmlAttrs: {
    'data-theme': theme,
  },
})

const { locale, setLocale } = useI18n()
const runtimeConfig = useRuntimeConfig()
const currentLanguage = ref(locale.value)

const languages = runtimeConfig.public.i18n.locales
  .map(item => item.language)
  .sort(language => language === locale.value ? -1 : 1)

const { phoneNumber, email, linkedin } = config.contactLinks
const contactLinks = [phoneNumber, email, linkedin]

function changeLanguage(event) {
  const selectedLocale = event.target.value
  currentLanguage.value = selectedLocale
  setLocale(selectedLocale)
  saveLanguage(selectedLocale)
}

function handleSwitchTheme() {
  switchTheme()
  saveTheme(theme.value)
}
</script>

<template>
  <div class="navigation_container">
    <button
      class="navigation_container__theme-toggle"
      @click="handleSwitchTheme()"
    >
      <img
        v-if="theme === 'dark'"
        src="/images/light/sun.svg"
        alt="Sun icon"
        class="navigation_container__theme-icon"
      >
      <img
        v-else
        src="/images/dark/moon.svg"
        alt="Moon icon"
        class="navigation_container__theme-icon"
      >
    </button>
    <div class="navigation_container__language-switcher">
      <select
        :value="currentLanguage"
        class="navigation_container__language-selector"
        aria-label="Select Language"
        @change="changeLanguage"
      >
        <option
          v-for="language in languages"
          :key="language"
          class="navigation_container__language-option"
          :value="language"
        >
          {{ language.toUpperCase() }}
        </option>
      </select>
    </div>
  </div>
  <div class="navigation_container__contact-links">
    <span
      v-for="(link, index) in contactLinks"
      :key="link"
      class="navigation_container__contact-link"
    >
      {{ link }}<span
        v-if="index < contactLinks.length - 1"
        class="navigation_container__contact-link-separator"
      >&nbsp;|&nbsp;</span>
    </span>
  </div>
</template>

<style>
.navigation_container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  gap: calc(var(--spacer)/2);
}

.navigation_container__theme-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.navigation_container__theme-icon {
  width: 1.25rem;
  height: 1.25rem;
}

.navigation_container__language-switcher {
  display: flex;
  justify-content: flex-end;
}

.navigation_container__language-selector {
  font-size: var(--font-sm);
  color: var(--text-color);
  background-color: var(--background-color);
  padding: calc(var(--spacer)/3);
  cursor: pointer;
  border: none;
}

.navigation_container__language-option {
  font-size: var(--font-sm);
  color: var(--text-color);
  background-color: var(--background-color);
}

.navigation_container__contact-links {
  display: none;
}

@media screen and (width >= 1024px) {
  .navigation_container__language-selector {
    font-size: var(--font-md);
  }
}

@media print {
  .navigation_container__theme-toggle {
    display: none;
  }

  .navigation_container__language-switcher {
    display: none;
  }

  .navigation_container__contact-links {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-size: var(--font-sm);
  }
}
</style>
