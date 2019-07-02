import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M2048 1365H0V683h2048v682z'
    }
  ]
]

export default createIcon(jsx, 'SemanticZoom')
