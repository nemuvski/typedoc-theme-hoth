import { JSX } from 'typedoc'

const searchIcon: TypeDocChildElement = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='32'
      height='32'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      stroke-width='2'
      stroke-linecap='butt'
      stroke-linejoin='round'
    >
      {/* @ts-ignore: never mind */}
      <circle cx='11' cy='11' r='8' />
      {/* @ts-ignore: never mind */}
      <line x1='21' y1='21' x2='16.65' y2='16.65' />
    </svg>
  )
}

export default searchIcon
