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
        'M1856 256q40 0 75 15t61 41 41 61 15 75v1152q0 40-15 75t-41 61-61 41-75 15H192q-40 0-75-15t-61-41-41-61-15-75V448q0-40 15-75t41-61 61-41 75-15h1664zm64 192q0-26-19-45t-45-19H192q-26 0-45 19t-19 45v1152q0 26 19 45t45 19h1664q26 0 45-19t19-45V448zM896 512h896v896H896V512zm384 640v128h128v-256h-384v256h128v-128h128zm-256-512v256h512v384h128V640h-128v128h-128V640h-128v128h-128V640h-128z'
    }
  ]
]

export default createIcon(jsx, 'Smartcard')
