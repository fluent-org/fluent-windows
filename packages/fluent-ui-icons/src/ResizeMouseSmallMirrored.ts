import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M.125 0v2048h2047.88V0H.125zm127.992 128h1791.89v1280h-511.969v512H128.118V128z'
    }
  ]
]

export default createIcon(jsx, 'ResizeMouseSmallMirrored')
