<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const dogfyDietTitle = computed(() => `${t('workExperienceContainer.label.dogfyDiet')} · ${t('common.label.fullTime')}`)
const dogfyDietUbication = computed(() => `${t('common.label.barcelona')} · ${t('common.label.hybrid')}`)

const andyTitle = computed(() => `${t('workExperienceContainer.label.andy')} · ${t('common.label.fullTime')}`)
const andyUbication = computed(() => `${t('common.label.mataro')} · ${t('common.label.remote')}`)

const kriterTitle = computed(() => `${t('workExperienceContainer.label.kriter')} · ${t('common.label.partTime')}`)
const kriterUbication = computed(() => `${t('common.label.mataro')} · ${t('common.label.onSite')}`)

console.log(t('common.label.years', 2))
</script>

<template>
  <div class="work-experience-container">
    <h3 class="work-experience-container__title">
      {{ $t('workExperienceContainer.label.title') }}
    </h3>
    <div class="work-experience-container__job-container">
      <h3 class="work-experience-container__job-category">
        {{ $t('common.label.seniorFrontendDeveloper') }}
      </h3>
      <p class="work-experience-container__company-name">
        {{ dogfyDietTitle }}
      </p>
      <p class="work-experience-container__company-dates">
        TODO: dates ...
      </p>
      <p class="work-experience-container__company-ubication">
        {{ dogfyDietUbication }}
      </p>
    </div>
    <div class="work-experience-container__job-container">
      <h3 class="work-experience-container__job-category">
        {{ $t('common.label.fullStackDeveloper') }}
      </h3>
      <p class="work-experience-container__company-name">
        {{ andyTitle }}
      </p>
      <p class="work-experience-container__company-dates">
        TODO: dates ...
      </p>
      <p class="work-experience-container__company-ubication">
        {{ andyUbication }}
      </p>
    </div>
    <div class="work-experience-container__job-container">
      <h3 class="work-experience-container__job-category">
        {{ $t('common.label.fullStackDeveloper') }}
      </h3>
      <p class="work-experience-container__company-name">
        {{ kriterTitle }}
      </p>
      <p class="work-experience-container__company-dates">
        TODO: dates ...
      </p>
      <p class="work-experience-container__company-ubication">
        {{ kriterUbication }}
      </p>
    </div>
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

.work-experience-container__job-container {
  display: flex;
  flex-direction: column;
  gap: calc(var(--spacer)/4);
}

.work-experience-container__job-category {
  font-size: var(--font-md);
  font-weight: bold;

  @media screen and (min-width: 1024px) {
    font-size: var(--font-lg);
  }
}

.work-experience-container__company-name,
.work-experience-container__company-dates,
.work-experience-container__company-ubication {
  font-size: var(--font-sm);

  @media screen and (min-width: 1024px) {
    font-size: var(--font-md);
  }
}
</style>
