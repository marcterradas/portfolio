<script setup>
import LanguageSwitcher from '@/infrastructure/LanguageSwitcher.vue'
</script>

<template>
  <main>
    <LanguageSwitcher />
    <div>{{ $t('test') }}</div>
  </main>
</template>
