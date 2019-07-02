import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M761 556l673 468-673 468V556zm58 112v712l512-356z'
    }
  ]
]

export default createIcon(jsx, 'Play36')
