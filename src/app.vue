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
    width: 100%;
    margin: 0 auto;
    padding: var(--spacer);
    max-width: var(--max-width);
}
</style>
