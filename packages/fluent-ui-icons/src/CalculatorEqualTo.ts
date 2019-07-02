import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M0 1408v-128h1920v128H0zm0-896h1920v128H0V512z'
    }
  ]
]

export default createIcon(jsx, 'CalculatorEqualTo')
