import { DefaultThemeRenderContext, JSX } from 'typedoc'
import {
  JSHOOK_DROPDOWN_BUTTON,
  JSHOOK_DROPDOWN_CONTENT,
  JSHOOK_APPEARANCE_INPUT,
  TSD_CLASS_FILTER_ITEM,
  TSD_ID_PREFIX_FILTER,
  APPEARANCE_VALUE_OS,
  APPEARANCE_VALUE_LIGHT,
  APPEARANCE_VALUE_DARK,
} from '../../constants'
import { camelToTitleCase } from '../../libs/string'
import { HothThemeContext } from '../index'
import darkIcon from '../static/dark-icon'
import filterIcon from '../static/filter-icon'
import lightIcon from '../static/light-icon'
import osIcon from '../static/os-icon'

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

  return (
    <div class='c-settings'>
      <div class='c-dropdown'>
        <button
          type='button'
          aria-label='Change appearance'
          data-jshook={JSHOOK_DROPDOWN_BUTTON}
          class='c-button c-dropdown__toggle-button'
        >
          <i class='c-appearance-icon c-appearance-icon--os'>{osIcon()}</i>
          <i class='c-appearance-icon c-appearance-icon--light'>{lightIcon()}</i>
          <i class='c-appearance-icon c-appearance-icon--dark'>{darkIcon()}</i>
        </button>
        <div class='c-dropdown__content' data-jshook={JSHOOK_DROPDOWN_CONTENT}>
          <form class='c-settings__list'>
            <div class='c-settings__list-item'>
              <label class='c-radio'>
                <input
                  data-jshook={JSHOOK_APPEARANCE_INPUT}
                  type='radio'
                  name='appearance'
                  value={APPEARANCE_VALUE_OS}
                  class='c-radio__input'
                />
                <span class='c-radio__label'>OS</span>
              </label>
            </div>
            <div class='c-settings__list-item'>
              <label class='c-radio'>
                <input
                  data-jshook={JSHOOK_APPEARANCE_INPUT}
                  type='radio'
                  name='appearance'
                  value={APPEARANCE_VALUE_LIGHT}
                  class='c-radio__input'
                />
                <span class='c-radio__label'>Light</span>
              </label>
            </div>
            <div class='c-settings__list-item'>
              <label class='c-radio'>
                <input
                  data-jshook={JSHOOK_APPEARANCE_INPUT}
                  type='radio'
                  name='appearance'
                  value={APPEARANCE_VALUE_DARK}
                  class='c-radio__input'
                />
                <span class='c-radio__label'>Dark</span>
              </label>
            </div>
          </form>
        </div>
      </div>

      {!!visibilityOptions.length && (
        <div class='c-dropdown'>
          <button
            type='button'
            aria-label='Change member visibility'
            data-jshook={JSHOOK_DROPDOWN_BUTTON}
            class='c-button c-dropdown__toggle-button'
          >
            {filterIcon()}
          </button>
          <div class='c-dropdown__content' data-jshook={JSHOOK_DROPDOWN_CONTENT}>
            <ul class='c-settings__list'>{...visibilityOptions}</ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default settings
