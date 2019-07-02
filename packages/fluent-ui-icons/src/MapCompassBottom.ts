import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1280 1024l-256 704-256-704h512z'
    }
  ]
]

export default createIcon(jsx, 'MapCompassBottom')
