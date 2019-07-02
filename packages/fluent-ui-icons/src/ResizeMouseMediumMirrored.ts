import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M.125 0v2048h2047.88V0H.125zm127.992 128h1791.89v896h-895.945v896H128.117V128z'
    }
  ]
]

export default createIcon(jsx, 'ResizeMouseMediumMirrored')
