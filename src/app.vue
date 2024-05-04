<script setup>
const { setLocale } = useI18n()
</script>

<template>
  <main>
    <button @click="setLocale('en')">
      en
    </button>
    <button @click="setLocale('es')">
      es
    </button>
    <button @click="setLocale('cat')">
      cat
    </button>
    <div>{{ $t('test') }}</div>
  </main>
</template>
