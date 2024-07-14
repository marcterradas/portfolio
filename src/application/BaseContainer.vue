<template>
  <div class="base-container">
    <slot />
  </div>
</template>

<style>
    .base-container {
      @media screen and (min-width: 1024px) {
          padding: 0 calc(var(--spacer)*6);
      }
    }
</style>
