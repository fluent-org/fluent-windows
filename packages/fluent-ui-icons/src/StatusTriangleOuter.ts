import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1920 2048H0L960 128z'
    }
  ]
]

export default createIcon(jsx, 'StatusTriangleOuter')
