<template>
  <p class="base-paragraph">
    <slot />
  </p>
</template>

<style>
.base-paragraph {
    font-size: var(--font-sm);

    @media screen and (min-width: 1024px) {
        font-size: var(--font-md);
    }
}
</style>
