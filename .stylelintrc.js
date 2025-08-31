export default {
  extends: [
    'stylelint-config-recommended-vue',
    'stylelint-config-standard',
  ],
  ignoreFiles: [
    'src/styles/normalize.min.css',
  ],
  rules: {
    // The project uses BEM (Block__Element--Modifier) naming for CSS classes.
    // The default selector-class-pattern rule expects kebab-case, so for now I will not add a custom plugin for BEM.
    'selector-class-pattern': null,
  },
  overrides: [
    {
      files: ['*.vue', '**/*.vue', '*.css', '**/*.css'],
      rules: {},
    },
  ],
}
