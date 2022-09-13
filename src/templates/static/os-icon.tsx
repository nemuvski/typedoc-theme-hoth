import { JSX } from 'typedoc'

const osIcon: TypeDocStaticElement = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='32'
      height='32'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
    >
      <rect x='2' y='3' width='20' height='14' rx='2' ry='2' />
      {/* @ts-ignore: never mind */}
      <line x1='8' y1='21' x2='16' y2='21' />
      {/* @ts-ignore: never mind */}
      <line x1='12' y1='17' x2='12' y2='21' />
    </svg>
  )
}

export default osIcon
