import { DefaultTheme, DefaultThemeRenderContext, type Options, type Renderer } from 'typedoc'
import { type BindFn, bind } from '../libs/bind'
import layout from './layout'
import container from './pages/container'
import project from './pages/project'
import branding from './partials/branding'
import breadcrumb from './partials/breadcrumb'
import comment from './partials/comment'
import flags from './partials/flags'
import footer from './partials/footer'
import header from './partials/header'
import memberDeclaration from './partials/member.declaration'
import navigation from './partials/navigation'
import primaryNavigation from './partials/primary-navigation'
import secondaryNavigation from './partials/secondary-navigation'
import settings from './partials/settings'
import toolbar from './partials/toolbar'

interface IHothThemeContext {
  branding: BindFn
  flags: BindFn
}

export class HothThemeContext extends DefaultThemeRenderContext implements IHothThemeContext {
  constructor(theme: DefaultTheme, options: Options) {
    super(theme, options)
  }

  // Layout
  defaultLayout = bind(layout, this)

  // Page
  indexTemplate = bind(project, this)
  reflectionTemplate = bind(container, this)

  // Partial
  breadcrumb = bind(breadcrumb, this)
  header = bind(header, this)
  footer = bind(footer, this)
  navigation = bind(navigation, this)
  primaryNavigation = bind(primaryNavigation, this)
  secondaryNavigation = bind(secondaryNavigation, this)
  settings = bind(settings, this)
  toolbar = bind(toolbar, this)

  // Custom partial
  branding = bind(branding, this)
  flags = bind(flags, this)
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
