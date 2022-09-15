import { JSX, ReflectionKind } from 'typedoc'
import { isContainerReflection } from '../../libs/assertion'
import { classNames, renderName } from '../../libs/element'

const secondaryNavigation: TypeDocElement = (context, props) => {
  if (props.model.isProject() && props.model.getChildrenByKind(ReflectionKind.Module).length) {
    return <></>
  }

  let effectivePageParent = props.model.parent
  if ((isContainerReflection(props.model) && props.model.children?.length) || props.model.isProject()) {
    effectivePageParent = props.model
  }

  const children = isContainerReflection(effectivePageParent) ? effectivePageParent.children : []

  const pageNavigation = children
    ? children
        .filter((child) => !child.kindOf(ReflectionKind.SomeModule))
        .map((child) => {
          return (
            <li
              class={`c-navigation-list__item ${classNames(
                { deprecated: child.isDeprecated(), current: props.model === child },
                child.cssClasses
              )}`}
            >
              <a href={context.urlTo(child)} class='c-navigation-link'>
                {context.icons[child.kind]()}
                {renderName(child)}
              </a>
            </li>
          )
        })
    : []

  if (effectivePageParent && effectivePageParent.kindOf(ReflectionKind.SomeModule | ReflectionKind.Project)) {
    return <nav class='l-secondary-navigation'>{!!pageNavigation.length && <ul class='c-navigation-list'>{pageNavigation}</ul>}</nav>
  }

  return (
    <nav class='l-secondary-navigation'>
      <ul class='c-navigation-list'>
        <li
          class={`c-navigation-list__item ${classNames(
            {
              deprecated: effectivePageParent?.isDeprecated(),
              current: effectivePageParent === props.model,
            },
            effectivePageParent?.cssClasses
          )}`}
        >
          {effectivePageParent && (
            <a href={context.urlTo(effectivePageParent)} class='c-navigation-link'>
              {context.icons[effectivePageParent.kind]()}
              <span>{renderName(effectivePageParent)}</span>
            </a>
          )}
          {pageNavigation.length && <ul class='c-navigation-list'>{pageNavigation}</ul>}
        </li>
      </ul>
    </nav>
  )
}

export default secondaryNavigation
