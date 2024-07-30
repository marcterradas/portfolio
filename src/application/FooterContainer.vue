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
      {{ $t('common.label.linkedin') }}
    </a>
    <a
      :href="config.contactLinks.github"
      class="footer-container__link"
      target="_blank"
    >{{ $t('common.label.github') }}
    </a>
    <a
      :href="config.contactLinks.email"
      class="footer-container__link"
      target="_blank"
    >{{ $t('common.label.email') }}
    </a>
  </div>
</template>

<style>
.footer-container {
  display: flex;
  justify-content: center;
  gap: var(--spacer);
}

.footer-container__link {
  font-size: var(--font-sm);
  color: var(--dark-gray);
  cursor: pointer;
  transition: var(--transition-color);

  @media screen and (min-width: 1024px) {
    font-size: var(--font-md);
  }
}

.footer-container__link {
  color: var(--white);
}
</style>
