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
        'M2048 384H.12v1152H2048V384zm-127.99 128v896H640.09V512h1279.92zM128.117 1408V512h383.977v896H128.117zm930.943-765L742.08 960l316.98 317 89.994-90-161.99-163h420.975V896H987.064l161.99-163z'
    }
  ]
]

export default createIcon(jsx, 'ClosePaneMirrored')
