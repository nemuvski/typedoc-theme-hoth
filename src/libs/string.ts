/**
 * @see {@link https://github.com/TypeStrong/typedoc/blob/v0.23.14/src/lib/output/themes/lib.tsx#L116}
 */
export function camelToTitleCase(text: string) {
  return text.substring(0, 1).toUpperCase() + text.substring(1).replace(/[a-z][A-Z]/g, (x) => `${x[0]} ${x[1]}`)
}
