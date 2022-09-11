import { DeclarationReflection } from 'typedoc'

export function isDeclarationReflection(value: unknown): value is DeclarationReflection {
  return value instanceof DeclarationReflection
}
