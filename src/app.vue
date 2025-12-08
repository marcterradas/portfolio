<script setup>
import { useI18n, useHead } from '#imports'

import NavigationContainer from '@/application/NavigationContainer.vue'
import DescriptionContainer from '@/application/DescriptionContainer.vue'
import WorkExperienceContainer from '@/application/WorkExperienceContainer.vue'
import EducationContainer from '@/application/EducationContainer.vue'
import LanguagesContainer from '@/application/LanguagesContainer.vue'
import FooterContainer from '@/application/FooterContainer.vue'
import BaseContainer from '@/application/BaseContainer.vue'
import { useScrollAnimation } from '@/infrastructure/composables/useScrollAnimation.js'

const { t, locale } = useI18n()

const { isVisible: isDescriptionVisible, elementRef: descriptionRef } = useScrollAnimation()
const { isVisible: isWorkExperienceVisible, elementRef: workExperienceRef } = useScrollAnimation()
const { isVisible: isEducationVisible, elementRef: educationRef } = useScrollAnimation()
const { isVisible: isLanguagesVisible, elementRef: languagesRef } = useScrollAnimation()
const { isVisible: isFooterVisible, elementRef: footerRef } = useScrollAnimation()

useHead({
  title: t('header.label.title'),
  meta: [
    { name: 'description', content: t('header.label.description') },
    { name: 'author', content: t('header.label.title') },
  ],
  htmlAttrs: {
    lang: locale,
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
        <BaseContainer v-if="isDescriptionVisible">
          <DescriptionContainer />
        </BaseContainer>
      </Transition>
    </main>
    <article ref="workExperienceRef">
      <Transition name="fade-slide">
        <BaseContainer v-if="isWorkExperienceVisible">
          <WorkExperienceContainer />
        </BaseContainer>
      </Transition>
    </article>
    <article ref="educationRef">
      <Transition name="fade-slide">
        <BaseContainer v-if="isEducationVisible">
          <EducationContainer />
        </BaseContainer>
      </Transition>
    </article>
    <article ref="languagesRef">
      <Transition name="fade-slide">
        <BaseContainer v-if="isLanguagesVisible">
          <LanguagesContainer />
        </BaseContainer>
      </Transition>
    </article>
    <footer ref="footerRef">
      <Transition name="fade-slide">
        <FooterContainer v-if="isFooterVisible" />
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
  gap: calc(var(--spacer)*4);
}

@media screen and (width >= 1024px) {
  .app {
    padding: calc(var(--spacer)*2);
  }
}

@media print {
  .app {
    padding: 0;
    gap: calc(var(--spacer)/2);
  }
}
</style>
