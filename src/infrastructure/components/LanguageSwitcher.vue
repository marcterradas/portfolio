<script setup>
import { useI18n, useRouter, useRuntimeConfig } from '#imports'

const { setLocale } = useI18n()
const router = useRouter()
const runtimeConfig = useRuntimeConfig()

const { configLocales: languages } = runtimeConfig.public.i18n

function changeLanguage(locale) {
  setLocale(locale)
  router.push(`/${locale}`)
}
</script>

<template>
  <div class="language-switcher">
    <div
      v-for="language in languages"
      :key="language"
      class="language-switcher__language"
      @click="changeLanguage(language)"
    >
      {{ language }}
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
  cursor: pointer;
}
</style>
