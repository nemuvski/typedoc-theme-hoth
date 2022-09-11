import { JSX } from 'typedoc'

const footer: TypeDocElementNonProps = (context) => {
  const hideGenerator = context.options.getValue('hideGenerator')

  return (
    <div class='l-footer'>
      {!hideGenerator && (
        <p>
          {'Generated using '}
          <a href='https://typedoc.org/' target='_blank'>
            TypeDoc
          </a>
        </p>
      )}
    </div>
  )
}

export default footer
