import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M2048 768l-632 486 248 794-448-345V768h832z'
    }
  ]
]

export default createIcon(jsx, 'QuarterStarRight')
