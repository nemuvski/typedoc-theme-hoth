import type { HothThemeContext } from '../templates'
import type { PageEvent, Reflection } from 'typedoc'

export function bindElement<P extends Reflection>(elm: TypeDocElement<P>, context: HothThemeContext) {
  return (props: PageEvent<P>) => elm(context, props)
}

export function bindElementNonProps(elm: TypeDocElementNonProps, context: HothThemeContext) {
  return () => elm(context)
}

export function bindChildElement<P extends Reflection>(elm: TypeDocChildElement, context: HothThemeContext) {
  return (props: P) => elm(context, props)
}

export type BindElementFnReturn = ReturnType<typeof bindElement>
