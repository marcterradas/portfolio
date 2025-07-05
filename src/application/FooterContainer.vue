<script setup>
import config from '@/infrastructure/config.js'

const linkedinUrl = `https://www.${config.contactLinks.linkedin}`
const githubUrl = `https://www.${config.contactLinks.github}`
const emailUrl = `mailto:${config.contactLinks.email}`
</script>

<template>
  <div class="footer-container">
    <a
      :href="linkedinUrl"
      class="footer-container__link"
      target="_blank"
    >
      <img
        class="footer-container__icon"
        src="/images/linkedin.svg"
        alt="linkedin icon"
      >
    </a>
    <a
      :href="githubUrl"
      class="footer-container__link"
      target="_blank"
    >
      <img
        class="footer-container__icon"
        src="/images/github.svg"
        alt="github icon"
      >
    </a>
    <a
      :href="emailUrl"
      class="footer-container__link"
      target="_blank"
    >
      <img
        class="footer-container__icon"
        src="/images/email.svg"
        alt="email icon"
      >
    </a>
    <a
      href="/documents/marcterradas.pdf"
      class="footer-container__link"
      download
    >
      <img
        class="footer-container__icon"
        src="/images/download.svg"
        alt="download icon"
      >
    </a>
  </div>
</template>

<style>
.footer-container {
  display: flex;
  justify-content: center;
  gap: calc(var(--spacer)*1.5);

  @media screen and (min-width: 1024px) {
    gap: calc(var(--spacer)*1.25);
  }
}

.footer-container__icon {
  width: calc(var(--default-size)*1.25);
  height: calc(var(--default-size)*1.25);
}

@media print {
  .footer-container {
    display: none;
  }
}
</style>
