import { DefaultThemeRenderContext, JSX } from 'typedoc'
import { JSHOOK_DROPDOWN_BUTTON, JSHOOK_DROPDOWN_CONTENT, TSD_CLASS_FILTER_ITEM, TSD_ID_PREFIX_FILTER } from '../../constants'
import { camelToTitleCase } from '../../libs/string'
import { HothThemeContext } from '../index'
import filterIcon from '../static/filter-icon'

function buildFilterItem<C extends DefaultThemeRenderContext = HothThemeContext>(
  context: C,
  name: string,
  displayName: string,
  defaultValue: boolean
) {
  return (
    <li class='c-settings__list-item'>
      <label class={`c-checkbox ${TSD_CLASS_FILTER_ITEM}`}>
        <input type='checkbox' class='c-checkbox__input' id={`${TSD_ID_PREFIX_FILTER}${name}`} name={name} checked={defaultValue} />
        <span class='c-checkbox__label'>{displayName}</span>
      </label>
    </li>
  )
}

const settings: TypeDocElementNonProps = (context) => {
  const defaultFilters: Record<string, boolean> = context.options.getValue('visibilityFilters')

  const visibilityOptions: JSX.Element[] = []
  for (const key of Object.keys(defaultFilters)) {
    if (key.startsWith('@')) {
      const filterName = key
        .substring(1)
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .toLowerCase()
      visibilityOptions.push(buildFilterItem(context, filterName, camelToTitleCase(key.substring(1)), defaultFilters[key]))
    } else if (
      (key === 'protected' && !context.options.getValue('excludeProtected')) ||
      (key === 'private' && !context.options.getValue('excludePrivate')) ||
      (key === 'external' && !context.options.getValue('excludeExternals')) ||
      key === 'inherited'
    ) {
      visibilityOptions.push(buildFilterItem(context, key, camelToTitleCase(key), defaultFilters[key]))
    }
  }

  if (!visibilityOptions.length) {
    return <></>
  }

  return (
    <div class='c-settings'>
      <div class='c-dropdown'>
        <button
          type='button'
          aria-label='Toggle panel of settings'
          data-jshook={JSHOOK_DROPDOWN_BUTTON}
          class='c-button c-dropdown__toggle-button'
        >
          {filterIcon()}
        </button>
        <div class='c-dropdown__content' data-jshook={JSHOOK_DROPDOWN_CONTENT}>
          <ul class='c-settings__list'>{...visibilityOptions}</ul>
        </div>
      </div>
    </div>
  )
}

export default settings
