<script setup>
import BaseTitleSection from '@/application/BaseTitleSection.vue'
import BaseParagraph from '@/application/BaseParagraph.vue'
</script>

<template>
  <div class="languages-container">
    <BaseTitleSection>
      {{ $t('languagesContainer.label.title') }}
    </BaseTitleSection>
    <div class="languages-container__languages">
      <BaseParagraph>
        {{ $t('educationContainer.label.catalan') }}
      </BaseParagraph>
      <BaseParagraph>
        {{ $t('educationContainer.label.spanish') }}
      </BaseParagraph>
      <BaseParagraph>
        {{ $t('educationContainer.label.english') }}
      </BaseParagraph>
    </div>
  </div>
</template>

<style>
.languages-container {
  display: flex;
  flex-direction: column;
  gap:var(--spacer);
}

.languages-container__languages {
  display: flex;
  flex-direction: column;
  gap: calc(var(--spacer)/2);
}
</style>
