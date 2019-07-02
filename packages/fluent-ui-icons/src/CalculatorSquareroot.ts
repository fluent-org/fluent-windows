import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1475 0h121L575 2048l-423-899H0v-127h231l344 766L1475 0z'
    }
  ]
]

export default createIcon(jsx, 'CalculatorSquareroot')
