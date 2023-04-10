module.exports = {
  plugins: ['stylelint-scss'],
  extends: ['stylelint-config-standard', 'stylelint-config-rational-order'],
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'max-empty-lines': null,
    'declaration-colon-newline-after': null,
    'value-list-comma-newline-after': null,
    'font-family-no-duplicate-names': null,
    'no-duplicate-selectors': null,
    'no-descending-specificity': null,
  },
}
