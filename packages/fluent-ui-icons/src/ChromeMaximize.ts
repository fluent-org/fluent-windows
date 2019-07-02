import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M2048 0v2048H0V0h2048zm-205 205H205v1638h1638V205z'
    }
  ]
]

export default createIcon(jsx, 'ChromeMaximize')
