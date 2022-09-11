import { statSync, readdirSync, mkdirSync, copyFileSync } from 'node:fs'
import { join, dirname } from 'node:path'

/**
 * @see {@link https://github.com/TypeStrong/typedoc/blob/v0.23.14/src/lib/utils/fs.ts}
 */
export function copySync(src: string, dest: string) {
  const stat = statSync(src)

  if (stat.isDirectory()) {
    const contained = readdirSync(src)
    contained.forEach((file) => copySync(join(src, file), join(dest, file)))
  } else if (stat.isFile()) {
    mkdirSync(dirname(dest), { recursive: true })
    copyFileSync(src, dest)
  } else {
    // Do nothing for FIFO, special devices.
  }
}
