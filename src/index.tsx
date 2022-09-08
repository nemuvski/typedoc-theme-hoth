import { Application, JSX } from 'typedoc'
import HothTheme from './theme'
import { THEME_NAME } from './constants'

export function load(app: Application) {
  // app.options.getValue()

  app.renderer.hooks.on('head.end', (ctx) => {
    return <link rel='stylesheet' href={ctx.relativeURL('assets/theme.css')} />
  })

  // app.renderer.hooks.on('body.end', (ctx) => {
  //   return <script src={ctx.relativeURL('assets/theme-hoth.js')}></script>
  // })

  app.renderer.defineTheme(THEME_NAME, HothTheme)
}
