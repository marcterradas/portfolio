<script setup>
import { computed } from 'vue'
import { useI18n } from '#imports'

import BaseTitleSection from '@/application/BaseTitleSection.vue'
import BaseSubtitleSection from '@/application/BaseSubtitleSection.vue'
import BaseParagraph from '@/application/BaseParagraph.vue'
import BaseChip from '@/application/BaseChip.vue'
import BaseSkill from '@/application/BaseSkill.vue'

import config from '@/infrastructure/config.js'

const { t } = useI18n()

const { daw, c1 } = config.education
const dawDates = `${daw.startDate} - ${daw.endDate}`

const dawGrade = computed(() => `${t('common.label.grade')}: ${daw.grade}`)
</script>

<template>
  <div class="education-container">
    <BaseTitleSection>
      {{ $t('educationContainer.label.title') }}
    </BaseTitleSection>
    <div class="education-container__studies">
      <div class="education-container__study">
        <BaseSubtitleSection>
          {{ $t('educationContainer.label.daw') }}
        </BaseSubtitleSection>
        <BaseParagraph>
          {{ $t('educationContainer.label.thosICodina') }}
        </BaseParagraph>
        <BaseParagraph class="education-container__dates">
          {{ dawDates }}
        </BaseParagraph>
        <BaseParagraph class="education-container__grade">
          {{ dawGrade }}
        </BaseParagraph>
        <div class="education-container__diploma">
          <BaseChip
            icon="/images/diploma.svg"
            link="/documents/daw.pdf"
          >
            {{ $t('common.label.title') }}
          </BaseChip>
        </div>
        <div class="education-container__skills-container">
          <BaseSkill
            v-for="skill in daw.skills"
            :key="skill"
          >
            {{ skill }}
          </BaseSkill>
        </div>
      </div>
      <div class="education-container__study">
        <BaseSubtitleSection>
          {{ $t('educationContainer.label.c1') }}
        </BaseSubtitleSection>
        <BaseParagraph>
          {{ $t('educationContainer.label.uoc') }}
        </BaseParagraph>
        <BaseParagraph class="education-container__dates">
          {{ c1.issuedDate }}
        </BaseParagraph>
        <div class="education-container__diploma">
          <BaseChip
            icon="/images/diploma.svg"
            link="/documents/english.c1.pdf"
          >
            {{ $t('common.label.certificate') }}
          </BaseChip>
        </div>
        <div class="education-container__skills-container">
          <BaseSkill
            v-for="skill in c1.skills"
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
.education-container {
  display: flex;
  flex-direction: column;
  gap:var(--spacer);
}

.education-container__studies {
  display: flex;
  flex-direction: column;
  gap: calc(var(--spacer)*3);
}

.education-container__study {
  display: flex;
  flex-direction: column;
  gap: calc(var(--spacer)/4);
  flex-wrap: wrap;
}

.education-container__skills-container {
  display: flex;
  flex-wrap: wrap;
  gap: calc(var(--spacer)/2);
  margin-top: calc(var(--spacer)/2);
}

.education-container__diploma {
  margin-top: var(--spacer)
}

@media print {
  .education-container {
    gap: calc(var(--spacer)/2);
  }

  .education-container__studies {
    gap: calc(var(--spacer)/2);
  }

  .education-container__study {
    gap: 0;
  }

  .education-container__dates,
  .education-container__grade,
  .education-container__skills-container,
  .education-container__diploma {
    display: none;
  }
}
</style>
