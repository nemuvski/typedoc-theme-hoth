import { join } from 'node:path'
import typescript from '@rollup/plugin-typescript'
import autoprefixer from 'autoprefixer'
import postcss from 'postcss'
import scss from 'rollup-plugin-scss'
import { terser } from 'rollup-plugin-terser'

const INPUT_DIR_PATH = join('theme')
const OUTPUT_DIR_PATH = join('dist', 'assets')
const OUTPUT_CSS_PATH = join(OUTPUT_DIR_PATH, 'theme.css')
const OUTPUT_JS_PATH = join(OUTPUT_DIR_PATH, 'theme.js')

/** @type {import('rollup').RollupOptions} */
const options = {
  input: join(INPUT_DIR_PATH, 'index.ts'),
  output: {
    file: OUTPUT_JS_PATH,
    format: 'iife',
    sourcemap: false,
  },
  plugins: [
    typescript({ tsconfig: join(INPUT_DIR_PATH, 'tsconfig.json') }),
    scss({
      output: OUTPUT_CSS_PATH,
      sourceMap: false,
      include: ['theme/**/*.scss'],
      exclude: [],
      failOnError: true,
      processor: (css) => {
        return postcss([autoprefixer()])
          .process(css, { from: undefined })
          .then((result) => result.css)
      },
      verbose: true,
      outputStyle: 'compressed',
    }),
    terser(),
  ],
}

export default options
