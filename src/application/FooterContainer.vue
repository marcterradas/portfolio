<script setup>
import { computed } from 'vue'
import config from '@/infrastructure/config.js'
import { useTheme } from '@/infrastructure/composables/useTheme.js'
import { getPackageVersion } from '@/domain/useVersion.js'

const linkedinUrl = `https://www.${config.contactLinks.linkedin}`
const githubUrl = `https://www.${config.contactLinks.github}`
const emailUrl = `mailto:${config.contactLinks.email}`

const appVersion = getPackageVersion()
const { theme } = useTheme()

const linkedinIcon = computed(() => theme.value === 'dark' ? '/images/light/linkedin.svg' : '/images/dark/linkedin.svg')
const githubIcon = computed(() => theme.value === 'dark' ? '/images/light/github.svg' : '/images/dark/github.svg')
const emailIcon = computed(() => theme.value === 'dark' ? '/images/light/email.svg' : '/images/dark/email.svg')
const downloadIcon = computed(() => theme.value === 'dark' ? '/images/light/download.svg' : '/images/dark/download.svg')

function printDocument() {
  window.print()
}
</script>

<template>
  <div class="footer-container">
    <div class="footer-container__links">
      <a
        :href="linkedinUrl"
        target="_blank"
      >
        <img
          class="footer-container__icon"
          :src="linkedinIcon"
          alt="linkedin icon"
        >
      </a>
      <a
        :href="githubUrl"
        target="_blank"
      >
        <img
          class="footer-container__icon"
          :src="githubIcon"
          alt="github icon"
        >
      </a>
      <a
        :href="emailUrl"
        target="_blank"
      >
        <img
          class="footer-container__icon"
          :src="emailIcon"
          alt="email icon"
        >
      </a>
      <div
        class="footer-container__curriculum"
        @click="printDocument"
      >
        <img
          class="footer-container__icon"
          :src="downloadIcon"
          alt="download icon"
        >
      </div>
    </div>
    <div class="footer-container__version">
      v{{ appVersion }}
    </div>
  </div>
</template>

<style>
.footer-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
}

.footer-container__links {
  display: flex;
  justify-content: center;
  gap: calc(var(--spacer)*1.5);
}

.footer-container__icon {
  width: calc(var(--default-size)*1.25);
  height: calc(var(--default-size)*1.25);
}

.footer-container__curriculum {
  cursor: pointer;
}

.footer-container__version {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  font-size: var(--font-sm);
  color: var(--color-text-secondary);
}

@media screen and (width >= 1024px) {
  .footer-container {
    gap: calc(var(--spacer)*1.25);
  }
}

@media print {
  .footer-container {
    display: none;
  }
}
</style>
