<script setup>
import { ref } from 'vue'
import { useI18n, useRouter, useRuntimeConfig } from '#imports'

const { locale, setLocale } = useI18n()
const router = useRouter()
const runtimeConfig = useRuntimeConfig()

const { locales: languages } = runtimeConfig.public.i18n

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
  <div class="language-switcher">
    <button
      v-for="language in languages"
      :key="language"
      class="language-switcher__language"
      :class="{ 'language-switcher__language--selected': language === currentLanguage }"
      @click.prevent="changeLanguage(language)"
    >
      {{ language.toUpperCase() }}
    </button>
  </div>
</template>

<style>
.language-switcher {
  display: flex;
  justify-content: flex-end;
  gap: var(--spacer);
}

.language-switcher__language {
  font-size: var(--font-sm);
  color: var(--dark-gray);
  transition: var(--transition-color);

  @media screen and (min-width: 1024px) {
    font-size: var(--font-md);
  }
}

.language-switcher__language:hover {
  color: var(--white);
}

.language-switcher__language--selected {
  color: var(--white);
}
</style>
