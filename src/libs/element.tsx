/**
 * Ship
 *
 * @see {@link https://github.com/TypeStrong/typedoc/blob/master/src/lib/output/themes/lib.tsx}
 */

import { JSX, type Comment, type ReflectionFlags } from 'typedoc'

export function join<T>(joiner: JSX.Children, list: Array<T>, cb: (x: T) => JSX.Children) {
  const result: JSX.Children = []

  for (const item of list) {
    if (result.length > 0) {
      result.push(joiner)
    }
    result.push(cb(item))
  }

  return <>{result}</>
}

export function renderFlags(flags: ReflectionFlags, comment?: Comment) {
  const allFlags = [...flags]

  if (comment) {
    allFlags.push(...Array.from(comment.modifierTags, (tag) => tag.replace(/@([a-z])/, (x) => x[1].toUpperCase())))
  }

  return (
    <>
      {allFlags.map((item) => {
        return (
          <>
            <code class={`c-tag c-tag--${item}`}>{item}</code>{' '}
          </>
        )
      })}
    </>
  )
}
