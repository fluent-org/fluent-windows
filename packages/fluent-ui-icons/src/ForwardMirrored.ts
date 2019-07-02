import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M.125 1024l940.942 941 89.994-90-786.952-787H2042V960H244.11l786.952-787-89.994-90z'
    }
  ]
]

export default createIcon(jsx, 'ForwardMirrored')
