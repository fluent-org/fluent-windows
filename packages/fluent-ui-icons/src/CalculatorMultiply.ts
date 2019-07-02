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
        'M1805 205l-755 755 755 755-90 90-755-755-755 755-90-90 755-755-755-755 90-90 755 755 755-755 90 90z'
    }
  ]
]

export default createIcon(jsx, 'CalculatorMultiply')
