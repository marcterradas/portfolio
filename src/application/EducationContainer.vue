<script setup>
</script>

<template>
  <div class="education-container">
    <h3 class="education-container__title">
      {{ $t('educationContainer.label.title') }}
    </h3>
    <div>TODO: DAW</div>
    <div>TODO: C1</div>
  </div>
</template>

<style>
.education-container {
  display: flex;
  flex-direction: column;
  gap:var(--spacer);
}

.education-container__title {
  font-size: var(--font-lg);

  @media screen and (min-width: 1024px) {
    font-size: var(--font-xl);
  }
}
</style>
