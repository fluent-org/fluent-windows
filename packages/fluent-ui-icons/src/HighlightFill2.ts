import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d:
        'M1984 448q-89 0-160 39.5t-120.5 103-76.5 144-27 161.5v320H448V896q0-81-27-161.5t-76.5-144-121-103T64 448h1920z'
    }
  ]
]

export default createIcon(jsx, 'HighlightFill2')
