import { ContainerReflection, DeclarationReflection, ReflectionType, SignatureReflection } from 'typedoc'

export function isDeclarationReflection(value: unknown): value is DeclarationReflection {
  return value instanceof DeclarationReflection
}

export function isSignatureReflection(value: unknown): value is SignatureReflection {
  return value instanceof SignatureReflection
}

export function isContainerReflection(value: unknown): value is ContainerReflection {
  return value instanceof ContainerReflection
}

export function isReflectionType(value: unknown): value is ReflectionType {
  return value instanceof ReflectionType
}
