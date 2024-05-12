<script setup>
import language from './infrastructure/language.vue'
</script>

<template>
  <main>
    <language />
    <div>{{ $t('test') }}</div>
  </main>
</template>
