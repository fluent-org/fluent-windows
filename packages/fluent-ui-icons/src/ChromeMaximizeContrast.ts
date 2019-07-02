import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M0 0h2048v2048H0V0zm1638 1638V410H410v1228h1228z'
    }
  ]
]

export default createIcon(jsx, 'ChromeMaximizeContrast')
