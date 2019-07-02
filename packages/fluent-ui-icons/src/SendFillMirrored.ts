import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M2042 1637l-203.988-613H901.07l-255.984-64 255.984-64h936.942L2042 283 11.12 960z'
    }
  ]
]

export default createIcon(jsx, 'SendFillMirrored')
