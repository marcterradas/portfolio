<template>
  <div class="base-container">
    <slot />
  </div>
</template>

<style>
@media screen and (width >= 1024px) {
.base-container {
    padding: 0 calc(var(--spacer)*6);
  }
}
</style>
