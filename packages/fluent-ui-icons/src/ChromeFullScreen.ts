import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M2048 0v819h-205V350L350 1843h469v205H0v-819h205v469L1698 205h-469V0h819z'
    }
  ]
]

export default createIcon(jsx, 'ChromeFullScreen')
