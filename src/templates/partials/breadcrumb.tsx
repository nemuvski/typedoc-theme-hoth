import { JSX } from 'typedoc'

const breadcrumbChildren: TypeDocChildElement = (context, props) => {
  if (props.parent) {
    return (
      <>
        {context.breadcrumb(props.parent)}
        <li class='c-breadcrumb__item'>
          {props.url ? (
            <a href={context.urlTo(props)} class='c-breadcrumb__item'>
              {props.name}
            </a>
          ) : (
            <span>{props.name}</span>
          )}
        </li>
      </>
    )
  } else if (props.url) {
    return (
      <li class='c-breadcrumb__item'>
        <a href={context.urlTo(props)} class='c-breadcrumb__item'>
          {props.name}
        </a>
      </li>
    )
  }

  // fallback
  return undefined
}

const breadcrumb: TypeDocChildElement = (context, props) => {
  return <ul class='c-breadcrumb'>{breadcrumbChildren(context, props)}</ul>
}

export default breadcrumb
