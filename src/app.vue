<script setup>
import LanguageSwitcher from '@/infrastructure/components/LanguageSwitcher.vue'
</script>

<template>
  <main>
    <LanguageSwitcher />
    <div>{{ $t('test') }}</div>
  </main>
</template>
