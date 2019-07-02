import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1536 0v128H384V0h1152zm45 979l-90 90-467-470v1449H896V599l-467 470-90-90 621-626z'
    }
  ]
]

export default createIcon(jsx, 'Upload')
