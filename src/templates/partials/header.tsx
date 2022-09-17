import { JSX, ReflectionKind } from 'typedoc'
import { isDeclarationReflection } from '../../libs/assertion'
import { hasTypeParameters, join } from '../../libs/element'

const header: TypeDocElement = (context, props) => {
  const { model } = props
  let name = model.name
  if (isDeclarationReflection(model) && model.version) {
    name += `v${model.version}`
  }
  if (hasTypeParameters(model)) {
    name += `<${join(', ', model.typeParameters, (item) => item.name)}>`
  }

  return (
    <div class='l-header'>
      <div class='l-header__container'>
        <h1 class='l-header__title'>
          {model.kind !== ReflectionKind.Project && `${model.kindString ?? ''} `}
          {name}
        </h1>
        {context.flags(props)}
      </div>

      {model.parent && <div class='l-header__breadcrumb'>{context.breadcrumb(model)}</div>}
    </div>
  )
}

export default header
