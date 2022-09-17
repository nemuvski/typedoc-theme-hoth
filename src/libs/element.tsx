/**
 * Ship
 *
 * @see {@link https://github.com/TypeStrong/typedoc/blob/master/src/lib/output/themes/lib.tsx}
 */

import { JSX, type Comment, type Reflection, type ReflectionFlags, type TypeParameterReflection } from 'typedoc'
import { isDeclarationReflection, isSignatureReflection } from './assertion'

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

export function classNames(names: Record<string, boolean | null | undefined>, extraCss?: string) {
  const css = Object.keys(names)
    .filter((key) => names[key])
    .concat(extraCss || '')
    .join(' ')
    .trim()
    .replace(/\s+/g, ' ')
  return css.length ? css : undefined
}

export function wbr(str: string): (string | JSX.Element)[] {
  const ret: (string | JSX.Element)[] = []
  const re = /[\s\S]*?(?:[^_-][_-](?=[^_-])|[^A-Z](?=[A-Z][^A-Z]))/g
  let match: RegExpExecArray | null
  let i = 0
  while ((match = re.exec(str))) {
    ret.push(match[0], <wbr />)
    i += match[0].length
  }
  ret.push(str.slice(i))
  return ret
}

export function renderName(reflection: Reflection) {
  if (!reflection.name) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return <em>{wbr(reflection.kindString!)}</em>
  }

  if (reflection.flags.isOptional) {
    return <>{wbr(reflection.name)}?</>
  }

  return wbr(reflection.name)
}

export function hasTypeParameters(reflection: Reflection): reflection is Reflection & { typeParameters: TypeParameterReflection[] } {
  return (
    (isDeclarationReflection(reflection) || isSignatureReflection(reflection)) &&
    reflection.typeParameters != null &&
    reflection.typeParameters.length > 0
  )
}

export function renderTypeParametersSignature(typeParameters?: Array<TypeParameterReflection>): JSX.Element {
  return (
    <>
      {!!typeParameters && typeParameters.length > 0 && (
        <>
          <span class='tsd-signature-symbol'>{'<'}</span>
          {join(<span class='tsd-signature-symbol'>{', '}</span>, typeParameters, (item) => (
            <>
              {item.varianceModifier ? `${item.varianceModifier} ` : ''}
              <span class='tsd-signature-type' data-tsd-kind={item.kindString}>
                {item.name}
              </span>
            </>
          ))}
          <span class='tsd-signature-symbol'>{'>'}</span>
        </>
      )}
    </>
  )
}
