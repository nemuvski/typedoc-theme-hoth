import { ContainerReflection, DeclarationReflection, SignatureReflection } from 'typedoc'

export function isDeclarationReflection(value: unknown): value is DeclarationReflection {
  return value instanceof DeclarationReflection
}

export function isSignatureReflection(value: unknown): value is SignatureReflection {
  return value instanceof SignatureReflection
}

export function isContainerReflection(value: unknown): value is ContainerReflection {
  return value instanceof ContainerReflection
}
