import { JSX } from 'typedoc'

const flags: TypeDocElement = (context, { model }) => {
  const { comment, flags } = model
  const allFlags = [...flags]
  if (comment) {
    allFlags.push(...Array.from(comment.modifierTags, (tag) => tag.replace(/@([a-z])/, (x) => x[1].toUpperCase())))
  }
  if (allFlags.length) {
    return (
      <ul class='c-flags'>
        {allFlags.map((item) => (
          <li class={`c-flags__item c-flag__item--${item.toLowerCase()}`}>{item}</li>
        ))}
      </ul>
    )
  }
  // Fallback
  return <></>
}

export default flags
