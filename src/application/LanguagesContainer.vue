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
        {{ $t('educationContainer.message.catalan') }}
      </BaseParagraph>
      <BaseParagraph>
        {{ $t('educationContainer.message.spanish') }}
      </BaseParagraph>
      <BaseParagraph>
        {{ $t('educationContainer.message.english') }}
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

@media print {
  .languages-container {
    gap: calc(var(--spacer)/2);
  }

  .languages-container__languages {
    gap: 0;
  }
}
</style>
