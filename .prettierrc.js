module.exports = {
  printWidth: 140,
  tabWidth: 2,
  singleQuote: true,
  semi: false,
  trailingComma: 'es5',
  arrowParens: 'always',
  endOfLine: 'lf',
  jsxSingleQuote: true,
  overrides: [
    {
      files: '*.scss',
      options: {
        singleQuote: false,
        semi: false,
      },
    },
  ],
}
