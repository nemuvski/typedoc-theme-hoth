import { JSX } from 'typedoc'

const layout: TypeDocElement = (context, props) => {
  const htmlLang = context.options.getValue('htmlLang')
  const highlightCss = context.relativeURL('assets/highlight.css')
  const themeCss = context.relativeURL('assets/theme/theme.css')
  // const searchJs = context.relativeURL('assets/search.js')
  // const mainJs = context.relativeURL('assets/main.js')

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
        <link rel='stylesheet' href={highlightCss} />
        <link rel='stylesheet' href={themeCss} />
        {/*<script async src={searchJs} id='search-script' />*/}

        {context.hook('head.end')}
      </head>

      <body>
        {context.hook('body.begin')}

        <div class='l-page'>
          <div class='l-page__region-toolbar'>{context.toolbar(props)}</div>

          <div class='l-page__region-sidebar'>
            <div class='l-page__region-branding'>{context.branding(props)}</div>
            <div class='l-page__region-nav'>
              {context.hook('navigation.begin')}
              {context.navigation(props)}
              {context.hook('navigation.end')}
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

        {context.analytics()}

        {context.hook('body.end')}
      </body>
    </html>
  )
}

export default layout
