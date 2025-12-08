<template>
  <div class="base-skill">
    <slot />
  </div>
</template>

<style>
.base-skill {
  display: flex;
  align-items: center;
  font-size: var(--font-sm);
}

.base-skill:not(:last-child)::after {
  content: '|';
  margin-left: calc(var(--spacer)/2);
  color: var(--dark-gray);
  opacity: calc(var(--base-opacity) + 0.2);
}

@media screen and (width >= 1024px) {
  .base-skill {
    font-size: var(--font-md);
  }
}
</style>
