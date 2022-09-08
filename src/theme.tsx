import { copySync } from 'fs-extra'
import { join } from 'node:path'
import { DefaultTheme, DefaultThemeRenderContext, Options, RendererEvent, Renderer } from 'typedoc'
import { ASSETS_DIR_NAME, PACKAGE_NAME } from './constants'

class HothThemeContext extends DefaultThemeRenderContext {
  constructor(theme: DefaultTheme, options: Options) {
    super(theme, options)
  }
}

class HothTheme extends DefaultTheme {
  private _contextCache?: HothThemeContext

  constructor(renderer: Renderer) {
    super(renderer)

    /**
     * Overwrite assets directory
     */
    this.listenTo(this.owner, RendererEvent.END, () => {
      const out = this.application.options.getValue('out')

      copySync(join(require.resolve(PACKAGE_NAME), ASSETS_DIR_NAME), join(out, ASSETS_DIR_NAME))
    })
  }

  override getRenderContext(): HothThemeContext {
    this._contextCache ||= new HothThemeContext(this, this.application.options)
    return this._contextCache
  }
}

export default HothTheme
