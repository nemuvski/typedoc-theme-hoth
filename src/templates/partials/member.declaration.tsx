import { JSX, type DeclarationReflection } from 'typedoc'
import { isReflectionType } from '../../libs/assertion'
import { wbr, hasTypeParameters, renderTypeParametersSignature } from '../../libs/element'

const memberDeclaration: TypeDocChildElement<DeclarationReflection, JSX.Element> = (context, props) => {
  return (
    <>
      <section class='c-section c-section--signature'>
        <div class='c-signature'>
          {wbr(props.name)}
          {renderTypeParametersSignature(props.typeParameters)}
          {props.type && (
            <>
              <span class='c-signature__symbol'>{props.flags.isOptional && '?'}:</span> {context.type(props.type)}
            </>
          )}
          {!!props.defaultValue && (
            <span class='c-signature__symbol'>
              {' = '}
              {props.defaultValue}
            </span>
          )}
        </div>
      </section>

      <section class='c-section c-section--comment'>{context.comment(props)}</section>

      {hasTypeParameters(props) && (
        <section class='c-section c-section--type-parameters'>
          <h2 class='c-section__heading'>Type Parameters</h2>
          {context.typeParameters(props.typeParameters)}
        </section>
      )}

      {isReflectionType(props.type) && (
        <section class='c-section c-section--type-declaration'>
          <h2 class='c-section__heading'>Type declaration</h2>
          {context.parameter(props.type.declaration)}
        </section>
      )}

      <section class='c-section c-section--member-sources'>{context.memberSources(props)}</section>
    </>
  )
}

export default memberDeclaration
