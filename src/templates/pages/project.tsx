import { JSX, type ProjectReflection } from 'typedoc'

const project: TypeDocElement<ProjectReflection> = (context, props) => {
  const { readme } = props.model
  const readmeContent = readme || []

  return (
    <div class='l-project'>
      <JSX.Raw html={context.markdown(readmeContent)} />
    </div>
  )
}

export default project
