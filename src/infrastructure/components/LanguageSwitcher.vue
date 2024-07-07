<script setup>
import { ref } from 'vue'
import { useI18n, useRouter, useRuntimeConfig } from '#imports'

const { locale, setLocale } = useI18n()
const router = useRouter()
const runtimeConfig = useRuntimeConfig()

const { configLocales: languages } = runtimeConfig.public.i18n

const currentLanguage = ref(locale.value)

function changeLanguage(locale) {
  setLocale(locale)
  currentLanguage.value = locale
  router.push(`/${locale}`)
}
</script>

<template>
  <div class="language-switcher">
    <div
      v-for="language in languages"
      :key="language"
      class="language-switcher__language"
      :class="{ 'language-switcher__language--selected': language === currentLanguage }"
      @click="changeLanguage(language)"
    >
      <div>
        {{ language.toUpperCase() }}
      </div>
    </div>
  </div>
</template>

<style>
.language-switcher {
  display: flex;
  justify-content: flex-end;
  gap: var(--spacer);
}

.language-switcher__language {
  font-size: var(--font-md);
  cursor: pointer;
}

.language-switcher__language--selected {
  font-weight: bold;
}
</style>
