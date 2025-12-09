<script setup>
import { useI18n, useHead } from '#imports'

import NavigationContainer from '@/application/NavigationContainer.vue'
import DescriptionContainer from '@/application/DescriptionContainer.vue'
import WorkExperienceContainer from '@/application/WorkExperienceContainer.vue'
import EducationContainer from '@/application/EducationContainer.vue'
import LanguagesContainer from '@/application/LanguagesContainer.vue'
import FooterContainer from '@/application/FooterContainer.vue'
import BaseContainer from '@/application/BaseContainer.vue'
import BaseDivider from '@/application/BaseDivider.vue'
import { useScrollAnimation } from '@/infrastructure/composables/useScrollAnimation.js'
import { useUserPreferences } from '@/infrastructure/composables/useUserPreferences.js'

const { t, locale } = useI18n()
const { theme } = useUserPreferences()

const { isVisible: isDescriptionVisible, elementRef: descriptionRef } = useScrollAnimation()
const { isVisible: isWorkExperienceVisible, elementRef: workExperienceRef } = useScrollAnimation()
const { isVisible: isEducationVisible, elementRef: educationRef } = useScrollAnimation()
const { isVisible: isLanguagesVisible, elementRef: languagesRef } = useScrollAnimation()
const { isVisible: isFooterVisible, elementRef: footerRef } = useScrollAnimation()
const { isVisible: isFirstDividerVisible, elementRef: firstDividerRef } = useScrollAnimation()
const { isVisible: isSecondDividerVisible, elementRef: secondDividerRef } = useScrollAnimation()
const { isVisible: isThirdDividerVisible, elementRef: thirdDividerRef } = useScrollAnimation()

useHead({
  title: t('header.label.title'),
  meta: [
    { name: 'description', content: t('header.label.description') },
    { name: 'author', content: t('header.label.title') },
  ],
  htmlAttrs: {
    'lang': locale,
    'data-theme': theme.value,
  },
})
</script>

<template>
  <div class="app">
    <nav>
      <NavigationContainer />
    </nav>
    <main ref="descriptionRef">
      <Transition name="fade-slide">
        <BaseContainer v-show="isDescriptionVisible">
          <DescriptionContainer />
        </BaseContainer>
      </Transition>
    </main>
    <section ref="firstDividerRef">
      <BaseContainer>
        <Transition name="fade-slide">
          <BaseDivider v-show="isFirstDividerVisible" />
        </Transition>
      </BaseContainer>
    </section>
    <article ref="workExperienceRef">
      <Transition name="fade-slide">
        <BaseContainer v-show="isWorkExperienceVisible">
          <WorkExperienceContainer />
        </BaseContainer>
      </Transition>
    </article>
    <section ref="secondDividerRef">
      <BaseContainer>
        <Transition name="fade-slide">
          <BaseDivider v-show="isSecondDividerVisible" />
        </Transition>
      </BaseContainer>
    </section>
    <article ref="educationRef">
      <Transition name="fade-slide">
        <BaseContainer v-show="isEducationVisible">
          <EducationContainer />
        </BaseContainer>
      </Transition>
    </article>
    <section ref="thirdDividerRef">
      <BaseContainer>
        <Transition name="fade-slide">
          <BaseDivider v-show="isThirdDividerVisible" />
        </Transition>
      </BaseContainer>
    </section>
    <article ref="languagesRef">
      <Transition name="fade-slide">
        <BaseContainer v-show="isLanguagesVisible">
          <LanguagesContainer />
        </BaseContainer>
      </Transition>
    </article>
    <footer ref="footerRef">
      <Transition name="fade-slide">
        <FooterContainer v-show="isFooterVisible" />
      </Transition>
    </footer>
  </div>
</template>

<style>
.app {
  width: 100%;
  margin: 0 auto;
  padding: calc(var(--spacer)*1.5);
  max-width: var(--max-width);
  display: flex;
  flex-direction: column;
  gap: var(--spacer);
}

@media screen and (width >= 1024px) {
  .app {
   gap: calc(var(--spacer)*2);
  }
}

@media print {
  .app {
    padding: 0;
    gap: calc(var(--spacer)/2);
  }
}
</style>
