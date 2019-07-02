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
        'M6.125 1088h1797.89l-786.952 787 89.994 90L2048 1024 1107.057 83l-89.994 90 786.952 787H6.125v128z'
    }
  ]
]

export default createIcon(jsx, 'BackMirrored')
