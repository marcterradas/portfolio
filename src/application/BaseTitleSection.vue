<template>
  <h3 class="base-title-section">
    <slot />
  </h3>
</template>

<style>
.base-title-section {
    font-size: var(--font-lg);
    font-weight: bold;

    @media screen and (min-width: 1024px) {
        font-size: var(--font-xl);
    }
}
</style>
