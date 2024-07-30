<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import BaseTitleSection from '@/application/BaseTitleSection.vue'
import BaseSubTitleSection from '@/application/BaseSubTitleSection.vue'
import BaseSkill from '@/application/BaseSkill.vue'
import BaseParagraph from '@/application/BaseParagraph.vue'

import config from '@/infrastructure/config.js'
import { calculateDifferenceYearsAndMonths } from '@/domain/dates.js'

const { t } = useI18n()

const { dogfyDiet, andy, kriterSoftware } = config.workExperience
const [currentDate] = new Date().toISOString().split('T')
const [dogfyDietYears, dogfyDietMonths] = calculateDifferenceYearsAndMonths(dogfyDiet.startDate, currentDate)
const [andyYears, andyMonths] = calculateDifferenceYearsAndMonths(andy.startDate, andy.endDate)
const [kriterSoftwareYears, kriterSoftwareMonths] = calculateDifferenceYearsAndMonths(kriterSoftware.startDate, kriterSoftware.endDate)

const dogfyDietTitle = computed(() => `${t('workExperienceContainer.label.dogfyDiet')} · ${t('common.label.fullTime')}`)
const dogfyDietUbication = computed(() => `${t('common.label.barcelona')} · ${t('common.label.hybrid')}`)
const dogfyDietDuration = computed(() => {
  const years = dogfyDietYears > 0 ? `${dogfyDietYears} ${t('common.label.years', dogfyDietYears)} ` : ''
  const months = dogfyDietMonths > 0 ? `${dogfyDietMonths} ${t('common.label.months', dogfyDietMonths)}` : ''
  return `${dogfyDiet.startDate} - ${t('common.label.present')} · ${years}${months}`
})

const andyTitle = computed(() => `${t('workExperienceContainer.label.andy')} · ${t('common.label.fullTime')}`)
const andyUbication = computed(() => `${t('common.label.mataro')} · ${t('common.label.remote')}`)
const andyDuration = computed(() => {
  const years = andyYears > 0 ? `${andyYears} ${t('common.label.years', andyYears)} ` : ''
  const months = andyMonths > 0 ? `${andyMonths} ${t('common.label.months', andyMonths)}` : ''
  return `${andy.startDate} - ${andy.endDate} · ${years}${months}`
})

const kriterSoftwareTitle = computed(() => `${t('workExperienceContainer.label.kriterSoftware')} · ${t('common.label.partTime')}`)
const kriterSoftwareUbication = computed(() => `${t('common.label.mataro')} · ${t('common.label.onSite')}`)
const kriterSoftwareDuration = computed(() => {
  const years = kriterSoftwareYears > 0 ? `${kriterSoftwareYears} ${t('common.label.years', kriterSoftwareYears)} ` : ''
  const months = kriterSoftwareMonths > 0 ? `${kriterSoftwareMonths} ${t('common.label.months', kriterSoftwareMonths)}` : ''
  return `${kriterSoftware.startDate} - ${kriterSoftware.endDate} · ${years}${months}`
})
</script>

<template>
  <div class="work-experience-container">
    <BaseTitleSection>
      {{ $t('workExperienceContainer.label.title') }}
    </BaseTitleSection>
    <div class="work-experience-container__jobs">
      <div class="work-experience-container__job">
        <BaseSubTitleSection>
          {{ $t('common.label.seniorFrontendDeveloper') }}
        </BaseSubTitleSection>
        <BaseParagraph>
          {{ dogfyDietTitle }}
        </BaseParagraph>
        <BaseParagraph>
          {{ dogfyDietDuration }}
        </BaseParagraph>
        <BaseParagraph>
          {{ dogfyDietUbication }}
        </BaseParagraph>
        <ul class="work-experience-container__company-description">
          <li>{{ $t('workExperienceContainer.message.dogfyDietPart1') }}</li>
          <li>{{ $t('workExperienceContainer.message.dogfyDietPart2') }}</li>
          <li>{{ $t('workExperienceContainer.message.dogfyDietPart3') }}</li>
          <li>{{ $t('workExperienceContainer.message.dogfyDietPart4') }}</li>
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
        <BaseSubTitleSection>
          {{ $t('common.label.fullStackDeveloper') }}
        </BaseSubTitleSection>
        <BaseParagraph>
          {{ andyTitle }}
        </BaseParagraph>
        <BaseParagraph>
          {{ andyDuration }}
        </BaseParagraph>
        <BaseParagraph>
          {{ andyUbication }}
        </BaseParagraph>
        <ul class="work-experience-container__company-description">
          <li>{{ $t('workExperienceContainer.message.andyPart1') }}</li>
          <li>{{ $t('workExperienceContainer.message.andyPart2') }}</li>
          <li>{{ $t('workExperienceContainer.message.andyPart3') }}</li>
          <li>{{ $t('workExperienceContainer.message.andyPart4') }}</li>
          <li>{{ $t('workExperienceContainer.message.andyPart5') }}</li>
          <li>{{ $t('workExperienceContainer.message.andyPart6') }}</li>
          <li>{{ $t('workExperienceContainer.message.andyPart7') }}</li>
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
        <BaseSubTitleSection>
          {{ $t('common.label.fullStackDeveloper') }}
        </BaseSubTitleSection>
        <BaseParagraph>
          {{ kriterSoftwareTitle }}
        </BaseParagraph>
        <BaseParagraph>
          {{ kriterSoftwareDuration }}
        </BaseParagraph>
        <BaseParagraph>
          {{ kriterSoftwareUbication }}
        </BaseParagraph>
        <ul class="work-experience-container__company-description">
          <li>{{ $t('workExperienceContainer.message.kriterSoftwarePart1') }}</li>
          <li>{{ $t('workExperienceContainer.message.kriterSoftwarePart2') }}</li>
        </ul>
        <div class="work-experience-container__skills">
          <BaseSkill
            v-for="skill in kriterSoftware.skills"
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

.work-experience-container__company-description {
  display: flex;
  flex-direction: column;
  list-style-type: disc;
  padding-inline-start: var(--spacer);
  gap: calc(var(--spacer)/4);
  margin-top: calc(var(--spacer)/2);
  font-size: var(--font-sm);

  @media screen and (min-width: 1024px) {
      font-size: var(--font-md);
  }
}

.work-experience-container__skills {
  display: flex;
  flex-wrap: wrap;
  gap: calc(var(--spacer)/2);
  margin-top: calc(var(--spacer)/2);
}
</style>
