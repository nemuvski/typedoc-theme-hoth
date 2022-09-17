import { JSX, ReflectionKind, type DeclarationReflection, type Reflection } from 'typedoc'
import { classNames, wbr } from '../../libs/element'
import chevronRightIcon from '../static/chevron-right-icon'
import folderIcon from '../static/folder-icon'

export function partition<T>(iter: Iterable<T>, predicate: (item: T) => boolean): [T[], T[]] {
  const left: T[] = []
  const right: T[] = []
  for (const item of iter) {
    if (predicate(item)) {
      left.push(item)
    } else {
      right.push(item)
    }
  }
  return [left, right]
}

function inPath(thisPage: Reflection, toCheck?: Reflection): boolean {
  while (toCheck) {
    if (toCheck.isProject()) return false
    if (thisPage === toCheck) return true
    toCheck = toCheck.parent
  }
  return false
}

const primaryNavigation: TypeDocElement = (context, props) => {
  const modules = props.model.project.getChildrenByKind(ReflectionKind.SomeModule)
  const [ext, int] = partition(modules, (m) => m.flags.isExternal)

  const selected = props.model.isProject()
  const current = selected || int.some((mod) => inPath(mod, props.model))

  const link = (mod: DeclarationReflection) => {
    const current = inPath(mod, props.model)
    const selected = mod.name === props.model.name
    const childModules = mod.children?.filter((m) => m.kindOf(ReflectionKind.SomeModule))
    return (
      <li class={`c-navigation-list__item ${classNames({ current, selected, deprecated: mod.isDeprecated() }, mod.cssClasses)}`}>
        <a class='c-navigation-link' href={context.urlTo(mod)}>
          <i class='c-navigation-link__icon c-navigation-link__icon--folder'>{folderIcon()}</i>
          {wbr(`${mod.name}${mod.version !== undefined ? ` - v${mod.version}` : ''}`)}
        </a>
        {childModules?.length && <ul class='c-navigation-list'>{childModules.map(link)}</ul>}
      </li>
    )
  }

  return (
    <nav class='l-primary-navigation'>
      <details class='c-accordion' open={true}>
        <summary class='c-accordion__summary'>
          <span class='c-navigation-heading'>Modules</span>
          <i class='c-accordion__summary-icon'>{chevronRightIcon()}</i>
        </summary>
        <div class='c-accordion__content'>
          <ul class='c-navigation-list'>
            <li class={`c-navigation-list__item ${classNames({ current, selected })}`}>
              <a class='c-navigation-link' href={context.urlTo(props.model.project)}>
                <i class='c-navigation-link__icon c-navigation-link__icon--folder'>{folderIcon()}</i>
                {wbr(props.project.name)}
              </a>
              {int.length && <ul class='c-navigation-list'>{int.map(link)}</ul>}
            </li>
            {ext.length && ext.map(link)}
          </ul>
        </div>
      </details>
    </nav>
  )
}

export default primaryNavigation
