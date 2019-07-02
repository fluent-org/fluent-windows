import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M896 896h128v640H896V896zm128-256v128H896V640h128z'
    }
  ]
]

export default createIcon(jsx, 'StatusCircleInfo')
