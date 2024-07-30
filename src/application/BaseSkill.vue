<template>
  <div class="base-skill">
    <slot />
  </div>
</template>

<style>
.base-skill {
  align-items: center;
  border: var(--default-border) solid var(--dark-gray);
  border-radius: var(--border-radius-rounded);
  display: flex;
  font-size: var(--font-sm);
  font-weight: bold;
  gap: calc(var(--spacer)/4);
  padding: calc(var(--spacer)/3);
  width: fit-content;
}
</style>
