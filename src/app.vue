<script setup>
const { setLocale } = useI18n()
const router = useRouter()

function changeLanguage(locale) {
  setLocale(locale)
  router.push(`/${locale}`)
}
</script>

<template>
  <main>
    <button @click="changeLanguage('en')">
      en
    </button>
    <button @click="changeLanguage('es')">
      es
    </button>
    <button @click="changeLanguage('cat')">
      cat
    </button>
    <div>{{ $t('test') }}</div>
  </main>
</template>
