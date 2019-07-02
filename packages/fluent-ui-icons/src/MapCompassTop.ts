import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1024 320l256 704H768l256-704z'
    }
  ]
]

export default createIcon(jsx, 'MapCompassTop')
