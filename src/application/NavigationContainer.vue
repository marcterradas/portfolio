<script setup>
import { ref } from 'vue'
import { useI18n, useRouter, useRuntimeConfig } from '#imports'
import config from '@/infrastructure/config.js'

const { locale, setLocale } = useI18n()
const router = useRouter()
const runtimeConfig = useRuntimeConfig()

const { locales: languages } = runtimeConfig.public.i18n
const { phoneNumber, email, github, linkedin, portfolio } = config.contactLinks
const contactLinks = [phoneNumber, email, github, linkedin, portfolio]

const currentLanguage = ref(locale.value)

/**
 * Change the current language
 * @param {string} locale
 */
function changeLanguage(locale) {
  setLocale(locale)
  currentLanguage.value = locale
  router.push(`/${locale}`)
}
</script>

<template>
  <div class="navigation_container__language-switcher">
    <button
      v-for="language in languages"
      :key="language"
      class="navigation_container__language"
      :class="{ 'navigation_container__language--selected': language === currentLanguage }"
      @click.prevent="changeLanguage(language)"
    >
      {{ language.toUpperCase() }}
    </button>
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
.navigation_container__language-switcher {
  display: flex;
  justify-content: flex-end;
  gap: var(--spacer);
}

.navigation_container__language {
  font-size: var(--font-sm);
  color: var(--dark-gray);
  transition: var(--transition-color);

  @media screen and (min-width: 1024px) {
    font-size: var(--font-md);
  }
}

.navigation_container__language:hover {
  color: var(--white);
}

.navigation_container__language--selected {
  color: var(--white);
}

.navigation_container__contact-links {
  display: none;
}

@media print {
  .navigation_container__language-switcher {
    display: none;
  }
  .navigation_container__contact-links {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    font-size: var(--font-sm);
  }
}
</style>
