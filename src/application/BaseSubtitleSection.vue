<template>
  <h4 class="base-subtitle-section">
    <slot />
  </h4>
</template>

<style>
.base-subtitle-section {
    font-size: var(--font-md);
    font-weight: bold;

  @media screen and (min-width: 1024px) {
    font-size: var(--font-lg);
  }
}
</style>
