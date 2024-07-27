<script setup>
const props = defineProps({
  icon: {
    type: String,
    default: null,
  },
  link: {
    type: String,
    required: true,
  },
})

const hasIcon = computed(() => !!props.icon)
</script>

<template>
  <a
    :href="props.link"
    target="_blank"
    class="base-link"
  >
    <img
      v-if="hasIcon"
      class="base-link__icon"
      :src="icon"
      alt="icon"
    >
    <slot />
  </a>
</template>

<style>
    .base-link {
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

        @media screen and (min-width: 1024px) {
            font-size: var(--font-md);
        }
    }

    .base-link:hover {
        background-color: var(--black-lightest);
    }

    .base-link__icon {
        width: var(--default-size);
        height: var(--default-size);
    }
</style>
