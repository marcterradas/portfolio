export default {
  extends: [
    'stylelint-config-recommended-vue',
    'stylelint-config-standard',
  ],
  ignoreFiles: [
    'src/styles/normalize.min.css',
  ],
  rules: {
    // We use BEM (Block__Element--Modifier) naming for CSS classes.
    // The default selector-class-pattern rule expects kebab-case, so we disable it for now.
    // Consider adding a custom regex later to enforce BEM if needed.
    'selector-class-pattern': null,
  },
  overrides: [
    {
      files: ['*.vue', '**/*.vue', '*.css', '**/*.css'],
      rules: {},
    },
  ],
}
