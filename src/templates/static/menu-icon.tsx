import { JSX } from 'typedoc'

const menuIcon: TypeDocStaticElement = () => {
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
      <line x1='3' y1='12' x2='21' y2='12' />
      {/* @ts-ignore: never mind */}
      <line x1='3' y1='6' x2='21' y2='6' />
      {/* @ts-ignore: never mind */}
      <line x1='3' y1='18' x2='21' y2='18' />
    </svg>
  )
}

export default menuIcon
