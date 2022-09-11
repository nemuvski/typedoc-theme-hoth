module.exports = {
  extends: ['stylelint-config-recommended-scss', 'stylelint-prettier/recommended', 'stylelint-config-recess-order'],
  plugins: ['stylelint-prettier'],
  defaultSeverity: 'warning',
  rules: {
    'prettier/prettier': true,
    'string-quotes': 'double',
  },
}
