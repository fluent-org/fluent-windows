import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1920 896v128h-896v896H896v-896H0V896h896V0h128v896h896z'
    }
  ]
]

export default createIcon(jsx, 'CalculatorAddition')
