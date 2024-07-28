<script setup>
</script>

<template>
  <div class="work-experience-container">
    <h3 class="work-experience-container__title">
      {{ $t('workExperienceContainer.label.title') }}
    </h3>
    <div>TODO: Dogfy</div>
    <div>TODO: Andy</div>
    <div>TODO: Kriter</div>
  </div>
</template>

<style>
.work-experience-container {
  display: flex;
  flex-direction: column;
  gap:var(--spacer);
}

.work-experience-container__title {
  font-size: var(--font-lg);

  @media screen and (min-width: 1024px) {
    font-size: var(--font-xl);
  }
}
</style>
