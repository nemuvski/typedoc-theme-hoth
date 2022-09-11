import { JSX } from 'typedoc'

const branding: TypeDocElement = (context, props) => {
  return (
    <div class='l-branding'>
      <a class='l-branding__title' href={context.relativeURL('index.html')}>
        {props.project.name}
      </a>
    </div>
  )
}

export default branding
