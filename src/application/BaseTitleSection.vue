<template>
  <h3 class="base-title-section">
    <slot />
  </h3>
</template>

<style>
.base-title-section {
    font-size: var(--font-lg);
    font-weight: bold;
}

@media screen and (width >= 1024px) {
    .base-title-section {
        font-size: var(--font-xl);
    }
}

@media print {
  .base-title-section {
    font-size: var(--font-sm);
    text-decoration: underline;
  }
}
</style>
