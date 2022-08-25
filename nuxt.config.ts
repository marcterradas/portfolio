import { defineNuxtConfig } from "nuxt";

// import en from "./assets/languages/en.json";
// import es from "./assets/languages/es.json";
// import cat from "./assets/languages/cat.json";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    //   "@nuxtjs/i18n"
  ],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config.js",
    exposeConfig: false,
    config: {},
    injectPosition: 0,
    viewer: true,
  },
  //   i18n: {
  //     locales: [
  //       { code: "en", iso: "en" },
  //       { code: "es", iso: "es" },
  //       { code: "cat", iso: "cat" },
  //     ],
  //     defaultLocale: "en",
  //     vueI18n: {
  //       fallbackLocale: "en",
  //       messages: {
  //         en: {},
  //         es: {},
  //         cat: {},
  //       },
  //     },
  //   },
});
