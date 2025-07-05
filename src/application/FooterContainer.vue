<script setup>
import config from '@/infrastructure/config.js'
</script>

<template>
  <div class="footer-container">
    <a
      :href="config.contactLinks.linkedin"
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
      :href="config.contactLinks.github"
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
      :href="config.contactLinks.email"
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
  gap: var(--spacer);
}

.footer-container__icon {
  width: calc(var(--default-size)*1.25);
  height: calc(var(--default-size)*1.25);
}
</style>
