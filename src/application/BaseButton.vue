<script setup>
import { defineEmits, computed } from 'vue'

const props = defineProps({
  icon: {
    type: String,
    default: null,
  },
})

defineEmits(['click'])

const hasIcon = computed(() => !!props.icon)
</script>

<template>
  <button
    class="base-button"
    @click="$emit('click')"
  >
    <img
      v-if="hasIcon"
      class="base-button__icon"
      :src="icon"
      alt=""
    >
    <slot />
  </button>
</template>

<style>
.base-button {
  align-items: center;
  background-color: var(--black);
  border: var(--default-border) solid var(--dark-gray);
  border-radius: var(--default-border-radius);
  color: var(--white);
  cursor: pointer;
  display: flex;
  font-size: var(--font-sm);
  font-weight: bold;
  gap: calc(var(--spacer)/4);
  padding: calc(var(--spacer)/3);
  text-decoration: none;
  transition: var(--transition-background);
  width: fit-content;
}

.base-button:hover {
  background-color: var(--black-lightest);
}

.base-button__icon {
  width: var(--default-size);
  height: var(--default-size);
}

@media screen and (min-width: 1024px) {
  .base-button {
    font-size: var(--font-md);
  }
}
</style>
