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
        'M2048 384H.12v1152H2048V384zm-127.99 128v896h-383.977V512h383.977zM128.117 1408V512h1279.92v896H128.117z'
    }
  ]
]

export default createIcon(jsx, 'DockLeftMirrored')
