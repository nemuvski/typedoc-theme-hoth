import { JSX } from 'typedoc'

const toolbar: TypeDocElement = (context, props) => {
  return (
    <div class='l-toolbar'>
      <div class='l-toolbar__block-left'>
        <button type='button' aria-label='Toggle sidebar' class='c-toggle-sidebar-button'>
          <span aria-hidden='true' />
          <span aria-hidden='true' />
          <span aria-hidden='true' />
        </button>
      </div>

      <div class='l-toolbar__block-right'>
        <label class='c-search-form'>
          <input
            aria-label='Search'
            spellcheck={false}
            autocomplete='off'
            type='text'
            inputMode='search'
            tabIndex={1}
            placeholder=''
            name='search-keyword'
          />
        </label>
      </div>
    </div>
  )
}

export default toolbar
