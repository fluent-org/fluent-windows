import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M0 768h832v935l-448 345 248-794L0 768z'
    }
  ]
]

export default createIcon(jsx, 'QuarterStarLeft')
