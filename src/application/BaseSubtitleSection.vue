<template>
  <h4 class="base-subtitle-section">
    <slot />
  </h4>
</template>

<style>
.base-subtitle-section {
    font-size: var(--font-md);
    font-weight: bold;
}

@media screen and (width >= 1024px) {
  .base-subtitle-section {
    font-size: var(--font-lg);
  }
}

@media print {
  .base-subtitle-section {
    font-size: var(--font-sm);
  }
}
</style>
