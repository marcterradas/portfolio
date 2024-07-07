<script setup>
import NavigationContainer from '@/application/NavigationContainer.vue'
</script>

<template>
  <div class="app">
    <NavigationContainer />
    <main>
      <div>{{ $t('test') }}</div>
    </main>
  </div>
</template>

<style>
.app {
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    padding: var(--spacer);
}
</style>
