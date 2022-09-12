import { JSX } from 'typedoc'

const footer: TypeDocElementNonProps = (context) => {
  const hideGenerator = context.options.getValue('hideGenerator')

  return (
    <div class='l-footer'>
      {!hideGenerator && (
        <p>
          <small>
            {'Generated using '}
            <a href='https://typedoc.org/' target='_blank'>
              TypeDoc
            </a>
          </small>
        </p>
      )}
    </div>
  )
}

export default footer
