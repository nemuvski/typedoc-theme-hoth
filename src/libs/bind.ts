import { JSX, type PageEvent, type Reflection } from 'typedoc'

export type BindFn<P extends Reflection = Reflection> = (props: PageEvent<P>) => JSX.Element

export function bind<F, L extends Array<unknown>, R>(fn: (f: F, ...a: L) => R, first: F) {
  return (...r: L) => fn(first, ...r)
}
