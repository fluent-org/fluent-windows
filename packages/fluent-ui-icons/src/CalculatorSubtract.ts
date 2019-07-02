import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M0 896h1920v128H0V896z'
    }
  ]
]

export default createIcon(jsx, 'CalculatorSubtract')
