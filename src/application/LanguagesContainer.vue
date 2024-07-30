<script setup>
import BaseTitleSection from '@/application/BaseTitleSection.vue'
</script>

<template>
  <div class="languages-container">
    <BaseTitleSection>
      {{ $t('languagesContainer.label.title') }}
    </BaseTitleSection>
  </div>
</template>

<style>
.education-container {
  display: flex;
  flex-direction: column;
  gap:var(--spacer);
}
</style>
