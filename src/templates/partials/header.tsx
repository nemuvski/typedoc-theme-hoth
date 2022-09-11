import { JSX, ReflectionKind } from 'typedoc'
import { isDeclarationReflection } from '../../libs/assertion'

const header: TypeDocElement = (context, props) => {
  const { model } = props

  let name = model.name
  if (isDeclarationReflection(model) && model.version) {
    name += `v${model.version}`
  }

  return (
    <div class='l-header'>
      <h1 class='l-header__title'>
        {model.kind !== ReflectionKind.Project && `${model.kindString ?? ''} `}
        {name}
      </h1>

      {!!model.parent && <div class='l-header__breadcrumb'>{context.breadcrumb(model)}</div>}
    </div>
  )
}

export default header
