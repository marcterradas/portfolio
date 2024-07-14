<template>
  <div class="base-container">
    <slot />
  </div>
</template>

<style>
    .base-container {
        padding: 0 calc(var(--spacer)*2);

        @media screen and (min-width: 1024px) {
            padding: 0 calc(var(--spacer)*4);
        }
    }
</style>
