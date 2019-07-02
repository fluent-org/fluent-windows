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
        'M1920 768q26 0 49.5 10t41 27.5 27.5 41 10 49.5v896h-512v256H512v-256H0V896q0-26 10-49.5t27.5-41 41-27.5 49.5-10h384V0h1024v768h384zm-1280 0h768V128H640v640zm768 640H640v512h768v-512zm512-512H128v768h384v-384h1024v384h384V896zM320 1024q26 0 45 19t19 45-19 45-45 19-45-19-19-45 19-45 45-19z'
    }
  ]
]

export default createIcon(jsx, 'Print')
