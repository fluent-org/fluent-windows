import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1280 256l768 768-768 768-181-181 459-459H0V896h1558l-459-459 181-181z'
    }
  ]
]

export default createIcon(jsx, 'ArrowRight8')
