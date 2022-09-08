import { join } from 'node:path'
import { terser } from 'rollup-plugin-terser'
import scss from 'rollup-plugin-scss'
import postcss from 'postcss'
import autoprefixer from 'autoprefixer'
import typescript from '@rollup/plugin-typescript'

const INPUT_DIR_PATH = join('src', 'theme')
const OUTPUT_DIR_PATH = join('dist', 'assets')
const OUTPUT_CSS_PATH = join(OUTPUT_DIR_PATH, 'theme.css')

/** @type {import('rollup').RollupOptions} */
const options = {
  input: join(INPUT_DIR_PATH, 'index.ts'),
  plugins: [
    typescript({ tsconfig: 'tsconfig.theme.json' }),
    scss({
      output: OUTPUT_CSS_PATH,
      sourceMap: false,
      exclude: [],
      failOnError: true,
      processor: (css) => {
        return postcss([autoprefixer()])
          .process(css, { from: undefined })
          .then((result) => result.css)
      },
      watch: [join(INPUT_DIR_PATH, 'styles')],
      verbose: true,
      outputStyle: 'compressed',
    }),
    terser(),
  ],
}

export default options
