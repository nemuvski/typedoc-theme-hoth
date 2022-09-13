import { DefaultTheme, DefaultThemeRenderContext, type Options, type ProjectReflection, type Renderer } from 'typedoc'
import { bindChildElement, bindElement, bindElementNonProps, type BindElementFnReturn } from '../libs/bind'
import layout from './layout'
import container from './pages/container'
import project from './pages/project'
import branding from './partials/branding'
import breadcrumb from './partials/breadcrumb'
import footer from './partials/footer'
import header from './partials/header'
import navigation from './partials/navigation'
import settings from './partials/settings'
import toolbar from './partials/toolbar'

interface IHothThemeContext {
  branding: BindElementFnReturn
}

export class HothThemeContext extends DefaultThemeRenderContext implements IHothThemeContext {
  constructor(theme: DefaultTheme, options: Options) {
    super(theme, options)
  }

  // Layout
  defaultLayout = bindElement(layout, this)

  // Page
  indexTemplate = bindElement<ProjectReflection>(project, this)
  reflectionTemplate = bindElement(container, this)

  // Partial
  breadcrumb = bindChildElement(breadcrumb, this)
  header = bindElement(header, this)
  footer = bindElementNonProps(footer, this)
  navigation = bindElement(navigation, this)
  settings = bindElementNonProps(settings, this)
  toolbar = bindElement(toolbar, this)

  // Custom partial
  branding = bindElement(branding, this)
}

class HothTheme extends DefaultTheme {
  private _contextCache?: HothThemeContext

  constructor(renderer: Renderer) {
    super(renderer)
  }

  override getRenderContext(): HothThemeContext {
    this._contextCache ||= new HothThemeContext(this, this.application.options)
    return this._contextCache
  }
}

export default HothTheme
