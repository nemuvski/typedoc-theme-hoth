/** @type {import('typedoc').TypeDocOptions} */
const options = {
  entryPoints: ['example/src'],
  cleanOutputDir: true,
  out: 'preview',
  readme: 'example/README.md',
  exclude: [],
  includeVersion: false,
  githubPages: false,
  hideGenerator: false,
  tsconfig: 'example/tsconfig.json',
  sort: ['source-order'],
  media: 'example/media',
  categorizeByGroup: false,
  searchCategoryBoosts: {
    Component: 2,
    Model: 1.2,
  },
  searchGroupBoosts: {
    Classes: 1.5,
  },
  lightHighlightTheme: 'dracula',
  darkHighlightTheme: 'dracula',

  // NOTE: Check the build output
  plugin: ['./dist'],
  theme: 'hoth',
}

module.exports = options
