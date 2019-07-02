import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1472 896l576 1152H896l576-1152z'
    }
  ]
]

export default createIcon(jsx, 'StatusTriangle')
