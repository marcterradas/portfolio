<template>
  <hr class="base-divider">
</template>

<style scoped>
  .base-divider {
      border: none;
      height: 1px;
      width: 100%;
      background-color: var(--text-color);
      opacity: 0.1;
  }

  @media print {
      .base-divider {
          display: none;
      }
  }
</style>
