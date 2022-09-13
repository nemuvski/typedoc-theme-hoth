import { JSX, type DefaultThemeRenderContext, type PageEvent, type Reflection } from 'typedoc'
import type { HothThemeContext } from '../templates'

declare global {
  type TypeDocElement<P extends Reflection = Reflection, C extends DefaultThemeRenderContext = HothThemeContext> = (
    context: C,
    props: PageEvent<P>
  ) => JSX.Element

  type TypeDocElementNonProps<C extends DefaultThemeRenderContext = HothThemeContext> = (context: C) => JSX.Element

  type TypeDocChildElement<
    P extends Reflection = Reflection,
    R = JSX.Element | undefined,
    C extends DefaultThemeRenderContext = HothThemeContext
  > = (context: C, props: P) => R

  type TypeDocStaticElement<R = JSX.Element> = () => R
}
