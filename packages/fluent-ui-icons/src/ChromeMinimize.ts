import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M2048 819v205H0V819h2048z'
    }
  ]
]

export default createIcon(jsx, 'ChromeMinimize')
