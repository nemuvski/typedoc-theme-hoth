import { JSX } from 'typedoc'
import { TSD_ID_SEARCH_SCRIPT, JSHOOK_CLOSE_SIDEBAR } from '../constants'

const layout: TypeDocElement = (context, props) => {
  const htmlLang = context.options.getValue('htmlLang')

  const tsdHighlightCss = context.relativeURL('assets/highlight.css')
  const tsdSearchJs = context.relativeURL('assets/search.js')
  // NOTE: To use the search logic code
  const tsdMainJs = context.relativeURL('assets/main.js')

  const themeCss = context.relativeURL('assets/theme/theme.css')
  const themeJs = context.relativeURL('assets/theme/theme.js')

  const title = props.model.name === props.project.name ? props.project.name : `${props.model.name} | ${props.project.name}`
  const metaDescription = `Documentation for ${props.project.name}`

  return (
    <html class='theme' lang={htmlLang}>
      <head>
        <meta charSet='utf-8' />

        {context.hook('head.begin')}

        <meta http-equiv='x-ua-compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content={metaDescription} />
        <title>{title}</title>
        <link rel='stylesheet' href={tsdHighlightCss} />
        <script async src={tsdSearchJs} id={TSD_ID_SEARCH_SCRIPT} />

        <link rel='stylesheet' href={themeCss} />
        <script async src={themeJs} />

        {context.hook('head.end')}
      </head>

      <body>
        {context.hook('body.begin')}

        <div class='l-page'>
          <div class='l-page__region-toolbar'>{context.toolbar(props)}</div>

          <div class='l-page__region-sidebar'>
            <div class='l-page__region-sidebar-inner'>
              <div class='l-page__region-branding'>{context.branding(props)}</div>
              <div class='l-page__region-nav'>
                {context.hook('navigation.begin')}
                {context.navigation(props)}
                {context.hook('navigation.end')}
              </div>
            </div>
          </div>

          <div class='l-page__region-content'>
            <div class='l-page__region-content-inner'>
              <header class='l-page__region-header'>{context.header(props)}</header>
              <main class='l-page__region-main'>
                {context.hook('content.begin')}
                {props.template(props)}
                {context.hook('content.end')}
              </main>
              <footer class='l-page__region-footer'>{context.footer()}</footer>
            </div>
          </div>
        </div>

        <div role='presentation' class='l-overlay' data-jshook={JSHOOK_CLOSE_SIDEBAR} />

        <script src={tsdMainJs} />

        {context.analytics()}

        {context.hook('body.end')}
      </body>
    </html>
  )
}

export default layout
