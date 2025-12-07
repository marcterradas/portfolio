<script setup>
import { computed } from 'vue'
import BaseChip from '@/application/BaseChip.vue'
import BaseButton from '@/application/BaseButton.vue'
import { calculateDifferenceYears } from '@/domain/dates.js'
import config from '@/infrastructure/config.js'
import { useTheme } from '@/infrastructure/composables/useTheme.js'

const { theme } = useTheme()

// Get the start date from the first job.
const { startDate: firstJobStartDate } = config.workExperience.kriterSoftware
const [currentDate] = new Date().toISOString().split('T')
const yearsOfExperience = calculateDifferenceYears(firstJobStartDate, currentDate)

const linkedinUrl = `https://www.${config.contactLinks.linkedin}`
const githubUrl = `https://www.${config.contactLinks.github}`
const emailUrl = `mailto:${config.contactLinks.email}`

const linkedinIcon = computed(() => theme.value === 'dark' ? '/images/light/linkedin.svg' : '/images/dark/linkedin.svg')
const githubIcon = computed(() => theme.value === 'dark' ? '/images/light/github.svg' : '/images/dark/github.svg')
const emailIcon = computed(() => theme.value === 'dark' ? '/images/light/email.svg' : '/images/dark/email.svg')
const downloadIcon = computed(() => theme.value === 'dark' ? '/images/light/download.svg' : '/images/dark/download.svg')

function printDocument() {
  window.print()
}
</script>

<template>
  <div class="description-container">
    <div class="description-container__row">
      <h1 class="description-container__name">
        {{ $t('descriptionContainer.label.name') }}
      </h1>
      <h2 class="description-container__title">
        {{ $t('descriptionContainer.label.title') }}
      </h2>
      <h3 class="description-container__location">
        {{ $t('descriptionContainer.label.location') }}
      </h3>
    </div>
    <div class="description-container__row">
      <p class="description-container__description">
        {{ $t('descriptionContainer.message.description', { yearsOfExperience }) }}
      </p>
      <div class="description-container__chips-container">
        <BaseChip
          :icon="linkedinIcon"
          :link="linkedinUrl"
        >
          {{ $t('common.label.linkedin') }}
        </BaseChip>
        <BaseChip
          :icon="githubIcon"
          :link="githubUrl"
        >
          {{ $t('common.label.github') }}
        </BaseChip>
        <BaseChip
          :icon="emailIcon"
          :link="emailUrl"
        >
          {{ $t('common.label.email') }}
        </BaseChip>
        <BaseButton
          :icon="downloadIcon"
          @click="printDocument"
        >
          {{ $t('common.label.curriculum') }}
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<style>
.description-container {
  display: flex;
  flex-direction: column;
  gap: calc(var(--spacer)*2);
}

.description-container__row {
  display: flex;
  flex-direction: column;
  gap: calc(var(--spacer)/4);
}

.description-container__name {
  font-size: var(--font-xl);
  font-weight: bold;
  text-align: center;
}

.description-container__title {
  font-size: var(--font-md);
  text-align: center;
}

.description-container__location {
  font-size: var(--font-sm);
  text-align: center;
}

.description-container__description {
  font-size: var(--font-sm);
}

.description-container__chips-container {
  display: flex;
  flex-wrap: wrap;
  gap: calc(var(--spacer)/2);
  margin-top: calc(var(--spacer)/2);
}

@media screen and (width >= 1024px) {
  .description-container {
    gap: calc(var(--spacer)*4);
  }

  .description-container__name {
    font-size: var(--font-xxl);
  }

  .description-container__title {
    font-size: var(--font-lg);
  }

  .description-container__location {
    font-size: var(--font-md);
  }

  .description-container__description {
    font-size: var(--font-md);
  }
}

@media print {
  .description-container {
    gap: calc(var(--spacer)/2);
  }

  .description-container__row {
    gap: 0;
  }

  .description-container__name,
  .description-container__title,
  .description-container__location {
    font-size: var(--font-sm);
    text-align: start;
  }

  .description-container__chips-container {
    display: none;
  }
}
</style>
