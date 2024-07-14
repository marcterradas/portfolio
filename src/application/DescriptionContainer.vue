<script setup>

</script>

<template>
  <div class="description-container">
    <h1 class="description-container__name">
      {{ $t('descriptionContainer.label.name') }}
    </h1>
    <h2 class="description-container__title">
      {{ $t('descriptionContainer.label.title') }}
    </h2>
  </div>
</template>

<style>
.description-container {
    display: flex;
    flex-direction: column;
    gap: var(--spacer);
}

.description-container__name {
    font-size: var(--font-xl);
    font-weight: bold;
    text-align: center;

    @media screen and (min-width: 1024px) {
        font-size: var(--font-xxl);
    }
}

.description-container__title {
    font-size: var(--font-lg);
    text-align: center;

    @media screen and (min-width: 1024px) {
        font-size: var(--font-xl);
    }
}
</style>
