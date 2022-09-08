/** @type {import('typedoc').TypeDocOptions} */
const options = {
  name: 'typedoc-theme-hoth',
  entryPoints: ['src/index.tsx'],
  cleanOutputDir: true,
  out: 'preview',
  readme: 'README.md',
  exclude: [],
  excludePrivate: true,
  excludeInternal: true,
  disableSources: true,
  includeVersion: true,
  githubPages: false,
  hideGenerator: false,
  darkHighlightTheme: 'dark-plus',

  // NOTE: Check the build output
  plugin: ['./dist'],
  theme: 'hoth',
}

module.exports = options
