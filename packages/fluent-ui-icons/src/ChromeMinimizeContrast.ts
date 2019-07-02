import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M0 819h2048v410H0V819z'
    }
  ]
]

export default createIcon(jsx, 'ChromeMinimizeContrast')
