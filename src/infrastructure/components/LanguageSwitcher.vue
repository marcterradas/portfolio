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
  <div
    v-for="language in languages"
    :key="language"
    @click="changeLanguage(language)"
  >
    {{ language }}
  </div>
</template>

<style>
 img {
    width: 100px;
    height: 100px;
 }
</style>
