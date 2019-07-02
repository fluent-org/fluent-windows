import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1024 0v1556l-640 492 248-794L0 768h784z'
    }
  ]
]

export default createIcon(jsx, 'HalfStarLeft')
