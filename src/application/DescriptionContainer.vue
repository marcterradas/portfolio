<script setup>
import BaseChip from '@/application/BaseChip.vue'

import { calculateDifferenceYears } from '@/domain/dates.js'
import config from '@/infrastructure/config.js'

// Get the start date from the first job.
const { startDate: firstJobStartDate } = config.workExperience.kriter
const [currentDate] = new Date().toISOString().split('T')
const yearsOfExperience = calculateDifferenceYears(firstJobStartDate, currentDate)
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
    </div>
    <div class="description-container__row">
      <p class="description-container__description">
        {{ $t('descriptionContainer.label.description', { yearsOfExperience }) }}
      </p>
      <p class="description-container__description">
        {{ $t('descriptionContainer.label.about') }}
      </p>
      <div class="description-container__chips-container">
        <BaseChip
          icon="/images/linkedin.svg"
          :link="config.contactLinks.linkedin"
        >
          {{ $t('common.label.linkedin') }}
        </BaseChip>
        <BaseChip
          icon="/images/github.svg"
          :link="config.contactLinks.github"
        >
          {{ $t('common.label.github') }}
        </BaseChip>
        <BaseChip
          icon="/images/email.svg"
          :link="config.contactLinks.email"
        >
          {{ $t('common.label.email') }}
        </BaseChip>
        <BaseChip
          icon="/images/download.svg"
          link="/documents/marcterradas.pdf"
          download
        >
          {{ $t('common.label.curriculum') }}
        </BaseChip>
      </div>
    </div>
  </div>
</template>

<style>
.description-container {
  display: flex;
  flex-direction: column;
  gap: calc(var(--spacer)*2);

  @media screen and (min-width: 1024px) {
      gap: calc(var(--spacer)*4);
  }
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

  @media screen and (min-width: 1024px) {
      font-size: var(--font-xxl);
  }
}

.description-container__title {
  font-size: var(--font-md);
  text-align: center;

  @media screen and (min-width: 1024px) {
      font-size: var(--font-lg);
  }
}

.description-container__description {
  font-size: var(--font-sm);

  @media screen and (min-width: 1024px) {
      font-size: var(--font-md);
  }
}

.description-container__chips-container {
  display: flex;
  flex-wrap: wrap;
  gap: calc(var(--spacer)/2);
  margin-top: calc(var(--spacer)/2);
}
</style>
