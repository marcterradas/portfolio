<script setup>
import { useI18n, useHead } from '#imports'

import NavigationContainer from '@/application/NavigationContainer.vue'
import DescriptionContainer from '@/application/DescriptionContainer.vue'
import WorkExperienceContainer from '@/application/WorkExperienceContainer.vue'
import EducationContainer from '@/application/EducationContainer.vue'
import LanguagesContainer from '@/application/LanguagesContainer.vue'
import FooterContainer from '@/application/FooterContainer.vue'
import BaseContainer from '@/application/BaseContainer.vue'

const { t, locale } = useI18n()

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
    <main>
      <BaseContainer>
        <DescriptionContainer />
      </BaseContainer>
    </main>
    <article>
      <BaseContainer>
        <WorkExperienceContainer />
      </BaseContainer>
    </article>
    <article>
      <BaseContainer>
        <EducationContainer />
      </BaseContainer>
    </article>
    <article>
      <BaseContainer>
        <LanguagesContainer />
      </BaseContainer>
    </article>
    <footer>
      <FooterContainer />
    </footer>
  </div>
</template>

<style>
.app {
  width: 100%;
  margin: 0 auto;
  padding: calc(var(--spacer)*2) calc(var(--spacer)*1.5);
  max-width: var(--max-width);
  display: flex;
  flex-direction: column;
  gap: calc(var(--spacer)*4);

  @media screen and (min-width: 1024px) {
    padding: calc(var(--spacer)*2.5) calc(var(--spacer)*2);
  }
}
</style>
