import { JSX } from 'typedoc'
import chevronRightIcon from '../static/chevron-right-icon'

const breadcrumbChildren: TypeDocChildElement = (context, props) => {
  if (props.parent) {
    return (
      <>
        {breadcrumbChildren(context, props.parent)}
        <li class='c-breadcrumb__item c-breadcrumb__item--icon'>{chevronRightIcon()}</li>
        <li class='c-breadcrumb__item'>
          {props.url ? (
            <a href={context.urlTo(props)} class='c-breadcrumb__item-content c-breadcrumb__item-content--link'>
              {props.name}
            </a>
          ) : (
            <span class='c-breadcrumb__item-content c-breadcrumb__item-content--text'>{props.name}</span>
          )}
        </li>
      </>
    )
  } else if (props.url) {
    return (
      <li class='c-breadcrumb__item'>
        <a href={context.urlTo(props)} class='c-breadcrumb__item-content c-breadcrumb__item-content--link'>
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
