import { JSX } from 'typedoc'

const navigation: TypeDocElement = (context, props) => {
  const { project } = props

  return (
    <div class='l-nav'>
      <div class='l-nav__project'>navigation</div>
    </div>
  )
}

export default navigation
