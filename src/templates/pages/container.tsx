import { JSX, ReflectionKind, type ContainerReflection, type DeclarationReflection } from 'typedoc'
import { isDeclarationReflection, isReflectionType } from '../../libs/assertion'

const commentElement: TypeDocChildElement = (context, props) => {
  if (props.hasComment()) {
    return <section class='c-section c-section--comment'>{context.comment(props)}</section>
  }
}

const implementedTypesElement: TypeDocChildElement<DeclarationReflection> = (context, { implementedTypes }) => {
  if (implementedTypes && implementedTypes.length) {
    return (
      <section class='c-section c-section--implemented-types'>
        <h2 class='c-section__heading'>Implements</h2>
        <div class='c-section__hierarchy'>
          <ul class='c-hierarchy'>
            {implementedTypes.map((item) => (
              <li class='c-hierarchy__item'>{context.type(item)}</li>
            ))}
          </ul>
        </div>
      </section>
    )
  }
}

const implementedByElement: TypeDocChildElement<DeclarationReflection> = (context, { implementedBy }) => {
  if (implementedBy && implementedBy.length) {
    return (
      <section class='c-section c-section--implemented-by'>
        <h2 class='c-section__heading'>Implements</h2>
        <div class='c-section__hierarchy'>
          <ul class='c-hierarchy'>
            {implementedBy.map((item) => (
              <li class='c-hierarchy__item'>{context.type(item)}</li>
            ))}
          </ul>
        </div>
      </section>
    )
  }
}

const signaturesElement: TypeDocChildElement<DeclarationReflection> = (context, props) => {
  return (
    <>
      {props.signatures && props.signatures.length && (
        <section class='c-section c-section--member-signatures'>{context.memberSignatures(props)}</section>
      )}

      {props.indexSignature && (
        <section class={'c-section c-section--index-signature ' + props.cssClasses}>
          <h2 class='c-section__heading'>Indexable</h2>

          <div class='c-signature'>
            {props.indexSignature.parameters && props.indexSignature.parameters.length && (
              <>
                <span class='c-signature__symbol'>[</span>
                {props.indexSignature.parameters.map((item) => (
                  <>
                    {item.name}: {context.type(item.type)}
                  </>
                ))}
                <span class='c-signature__symbol'>]: </span>
              </>
            )}
            {context.type(props.indexSignature.type)}
          </div>

          {context.comment(props.indexSignature)}

          {isReflectionType(props.indexSignature?.type) && context.parameter(props.indexSignature.type.declaration)}
        </section>
      )}

      {!props.signatures && context.memberSources(props)}
    </>
  )
}

const container: TypeDocElement<ContainerReflection> = (context, props) => {
  const { model } = props

  if (isDeclarationReflection(model) && [ReflectionKind.TypeAlias, ReflectionKind.Variable].includes(model.kind)) {
    return context.memberDeclaration(model)
  }

  return (
    <>
      {commentElement(context, model)}

      {isDeclarationReflection(model) && (
        <>
          {context.hierarchy(model.typeHierarchy)}
          {implementedTypesElement(context, model)}
          {implementedByElement(context, model)}
          {signaturesElement(context, model)}
        </>
      )}

      {props.model.children?.length && context.index(props.model)}

      {context.members(props.model)}
    </>
  )
}

export default container
