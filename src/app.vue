<script setup>
import NavigationContainer from '@/application/NavigationContainer.vue'
import DescriptionContainer from '@/application/DescriptionContainer.vue'
</script>

<template>
  <div class="app">
    <nav>
      <NavigationContainer />
    </nav>
    <main>
      <DescriptionContainer />
    </main>
  </div>
</template>

<style>
.app {
    width: 100%;
    margin: 0 auto;
    padding: calc(var(--spacer)*1.5);
    max-width: var(--max-width);
    display: flex;
    flex-direction: column;
    gap: calc(var(--spacer)*4);

    @media screen and (min-width: 1024px) {
      padding: calc(var(--spacer)*2);
    }
}
</style>
