import { join } from 'node:path'
import { RendererEvent, type Application } from 'typedoc'
import { copySync } from './libs/fs'
import HothTheme from './templates'

export function load(app: Application) {
  app.listenToOnce(app.renderer, {
    [RendererEvent.END]: (event: RendererEvent) => {
      // Ship theme assets: [MODULE_DIR]/dist/assets/ -> [CREATED_DOC_DIR]/assets/theme/
      copySync(join(__dirname, 'assets'), join(event.outputDirectory, 'assets', 'theme'))
    },
  })

  app.renderer.defineTheme('hoth', HothTheme)
}
