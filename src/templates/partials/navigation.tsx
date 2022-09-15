import { JSX } from 'typedoc'

const navigation: TypeDocElement = (context, props) => {
  return (
    <div class='l-navigation'>
      <div class='l-navigation__container l-navigation__container--primary'>{context.primaryNavigation(props)}</div>
      <div class='l-navigation__container l-navigation__container--secondary'>{context.secondaryNavigation(props)}</div>
    </div>
  )
}

export default navigation
