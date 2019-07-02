import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1611 1099l181 181-768 768-768-768 181-181 459 459V0h256v1558l459-459z'
    }
  ]
]

export default createIcon(jsx, 'ArrowDown8')
