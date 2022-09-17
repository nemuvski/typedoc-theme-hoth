import { JSX } from 'typedoc'
import { camelToTitleCase } from '../../libs/string'

const comment: TypeDocChildElement = (context, { comment }) => {
  if (!comment || !comment.hasVisibleComponent()) {
    return
  }

  return (
    <div class='c-comment'>
      <div class='c-comment__summary'>
        <JSX.Raw html={context.markdown(comment.summary)} />
      </div>
      {comment.blockTags.length && (
        <div class='c-comment__tags'>
          {comment.blockTags.map((item) => (
            <>
              <h2>{camelToTitleCase(item.tag.substring(1))}</h2>
              <JSX.Raw html={context.markdown(item.content)} />
            </>
          ))}
        </div>
      )}
    </div>
  )
}

export default comment
