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
        'M2048 384H.12v1152H2048V384zm-127.99 128v896H640.09V512h1279.92zM128.117 1408V512h383.977v896H128.117zm639.961-512v128h420.975l-161.99 163 89.994 90 316.98-317-316.98-317-89.994 90 161.99 163H768.078z'
    }
  ]
]

export default createIcon(jsx, 'OpenPaneMirrored')
