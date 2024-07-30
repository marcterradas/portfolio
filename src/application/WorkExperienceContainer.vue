<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import BaseSkill from '@/application/BaseSkill.vue'

import config from '@/infrastructure/config.js'
import { calculateDifferenceYearsAndMonths } from '@/domain/dates.js'

const { t } = useI18n()

const { dogfyDiet, andy, kriter } = config.workExperience
const [currentDate] = new Date().toISOString().split('T')
const [dogyDietYears, dogyDietMonths] = calculateDifferenceYearsAndMonths(dogfyDiet.startDate, currentDate)
const [andyYears, andyMonths] = calculateDifferenceYearsAndMonths(andy.startDate, andy.endDate)
const [kriterYears, kriterMonths] = calculateDifferenceYearsAndMonths(kriter.startDate, kriter.endDate)

const dogfyDietTitle = computed(() => `${t('workExperienceContainer.label.dogfyDiet')} · ${t('common.label.fullTime')}`)
const dogfyDietUbication = computed(() => `${t('common.label.barcelona')} · ${t('common.label.hybrid')}`)
const dogfyDietDuration = computed(() => {
  const years = dogyDietYears > 0 ? `${dogyDietYears} ${t('common.label.years', dogyDietYears)} ` : ''
  const months = dogyDietMonths > 0 ? `${dogyDietMonths} ${t('common.label.months', dogyDietMonths)}` : ''
  return `${dogfyDiet.startDate} - ${t('common.label.present')} · ${years}${months}`
})

const andyTitle = computed(() => `${t('workExperienceContainer.label.andy')} · ${t('common.label.fullTime')}`)
const andyUbication = computed(() => `${t('common.label.mataro')} · ${t('common.label.remote')}`)
const andyDuration = computed(() => {
  const years = andyYears > 0 ? `${andyYears} ${t('common.label.years', andyYears)} ` : ''
  const months = andyMonths > 0 ? `${andyMonths} ${t('common.label.months', andyMonths)}` : ''
  return `${andy.startDate} - ${andy.endDate} · ${years}${months}`
})

const kriterTitle = computed(() => `${t('workExperienceContainer.label.kriter')} · ${t('common.label.partTime')}`)
const kriterUbication = computed(() => `${t('common.label.mataro')} · ${t('common.label.onSite')}`)
const kriterDuration = computed(() => {
  const years = kriterYears > 0 ? `${kriterYears} ${t('common.label.years', kriterYears)} ` : ''
  const months = kriterMonths > 0 ? `${kriterMonths} ${t('common.label.months', kriterMonths)}` : ''
  return `${kriter.startDate} - ${kriter.endDate} · ${years}${months}`
})
</script>

<template>
  <div class="work-experience-container">
    <h3 class="work-experience-container__title">
      {{ $t('workExperienceContainer.label.title') }}
    </h3>
    <div class="work-experience-container__jobs">
      <div class="work-experience-container__job">
        <h3 class="work-experience-container__job-category">
          {{ $t('common.label.seniorFrontendDeveloper') }}
        </h3>
        <p class="work-experience-container__company-name">
          {{ dogfyDietTitle }}
        </p>
        <p class="work-experience-container__company-duration">
          {{ dogfyDietDuration }}
        </p>
        <p class="work-experience-container__company-ubication">
          {{ dogfyDietUbication }}
        </p>
        <ul class="work-experience-container__company-description">
          <li>{{ $t('workExperienceContainer.label.dogyDietPart1') }}</li>
          <li>{{ $t('workExperienceContainer.label.dogyDietPart2') }}</li>
          <li>{{ $t('workExperienceContainer.label.dogyDietPart3') }}</li>
          <li>{{ $t('workExperienceContainer.label.dogyDietPart4') }}</li>
        </ul>
        <div class="work-experience-container__skills">
          <BaseSkill
            v-for="skill in dogfyDiet.skills"
            :key="skill"
          >
            {{ skill }}
          </BaseSkill>
        </div>
      </div>
      <div class="work-experience-container__job">
        <h3 class="work-experience-container__job-category">
          {{ $t('common.label.fullStackDeveloper') }}
        </h3>
        <p class="work-experience-container__company-name">
          {{ andyTitle }}
        </p>
        <p class="work-experience-container__company-duration">
          {{ andyDuration }}
        </p>
        <p class="work-experience-container__company-ubication">
          {{ andyUbication }}
        </p>
        <ul class="work-experience-container__company-description">
          <li>{{ $t('workExperienceContainer.label.andyPart1') }}</li>
          <li>{{ $t('workExperienceContainer.label.andyPart2') }}</li>
          <li>{{ $t('workExperienceContainer.label.andyPart3') }}</li>
          <li>{{ $t('workExperienceContainer.label.andyPart4') }}</li>
          <li>{{ $t('workExperienceContainer.label.andyPart5') }}</li>
          <li>{{ $t('workExperienceContainer.label.andyPart6') }}</li>
          <li>{{ $t('workExperienceContainer.label.andyPart7') }}</li>
        </ul>
        <div class="work-experience-container__skills">
          <BaseSkill
            v-for="skill in andy.skills"
            :key="skill"
          >
            {{ skill }}
          </BaseSkill>
        </div>
      </div>
      <div class="work-experience-container__job">
        <h3 class="work-experience-container__job-category">
          {{ $t('common.label.fullStackDeveloper') }}
        </h3>
        <p class="work-experience-container__company-name">
          {{ kriterTitle }}
        </p>
        <p class="work-experience-container__company-duration">
          {{ kriterDuration }}
        </p>
        <p class="work-experience-container__company-ubication">
          {{ kriterUbication }}
        </p>
        <ul class="work-experience-container__company-description">
          <li>{{ $t('workExperienceContainer.label.kriterPart1') }}</li>
          <li>{{ $t('workExperienceContainer.label.kriterPart2') }}</li>
        </ul>
        <div class="work-experience-container__skills">
          <BaseSkill
            v-for="skill in kriter.skills"
            :key="skill"
          >
            {{ skill }}
          </BaseSkill>
        </div>
      </div>
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
  font-weight: bold;

  @media screen and (min-width: 1024px) {
    font-size: var(--font-xl);
  }
}

.work-experience-container__jobs {
  display: flex;
  flex-direction: column;
  gap: calc(var(--spacer)*3);
}

.work-experience-container__job {
  display: flex;
  flex-direction: column;
  gap: calc(var(--spacer)/4);
  flex-wrap: wrap;
}

.work-experience-container__job-category {
  font-size: var(--font-md);
  font-weight: bold;

  @media screen and (min-width: 1024px) {
    font-size: var(--font-lg);
  }
}

.work-experience-container__company-name,
.work-experience-container__company-duration,
.work-experience-container__company-ubication,
.work-experience-container__company-description {
  font-size: var(--font-sm);

  @media screen and (min-width: 1024px) {
    font-size: var(--font-md);
  }
}

.work-experience-container__company-description {
  display: flex;
  flex-direction: column;
  list-style-type: disc;
  padding-inline-start: var(--spacer);
  gap: calc(var(--spacer)/4);
  margin-top: calc(var(--spacer)/2);
}

.work-experience-container__skills {
  display: flex;
  flex-wrap: wrap;
  gap: calc(var(--spacer)/2);
  margin-top: calc(var(--spacer)/2);
}
</style>
