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
        'M1955 312l-456 456h165v128h-384V512h128v165l456-456zm-419 1224v-512h128v640H0V512h1152v128H128v896h1408z'
    }
  ]
]

export default createIcon(jsx, 'ReturnToWindow')
