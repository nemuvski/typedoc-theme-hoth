import { JSX } from 'typedoc'
import { JSHOOK_OPEN_SIDEBAR, TSD_ID_SEARCH, TSD_ID_SEARCH_FIELD, TSD_CLASS_SEARCH_RESULTS, TSD_CLASS_PAGE_TOOLBAR } from '../../constants'
import menuIcon from '../icons/menu'
import searchIcon from '../icons/search'

const toolbar: TypeDocElement = (context, props) => {
  return (
    <div class={`l-toolbar ${TSD_CLASS_PAGE_TOOLBAR}`}>
      <div class='l-toolbar__block-left'>
        <button type='button' aria-label='Toggle sidebar' data-jshook={JSHOOK_OPEN_SIDEBAR} class='c-toggle-sidebar-button'>
          {menuIcon(context, props.model)}
        </button>
      </div>

      <div class='l-toolbar__block-right'>
        <div id={TSD_ID_SEARCH} class='c-search-form' data-base={context.relativeURL('./')}>
          <label class='c-search-form__label' aria-label='Search' for={TSD_ID_SEARCH_FIELD}>
            {searchIcon(context, props.model)}
          </label>
          <input
            id={TSD_ID_SEARCH_FIELD}
            class='c-search-form__input'
            aria-label='Search input'
            spellcheck={false}
            autocomplete='off'
            type='text'
            inputMode='search'
            tabIndex={0}
            placeholder="'/' key press for focus"
            name='search-keyword'
          />
          <ul class={`c-search-form__results ${TSD_CLASS_SEARCH_RESULTS}`} />
        </div>
      </div>
    </div>
  )
}

export default toolbar
