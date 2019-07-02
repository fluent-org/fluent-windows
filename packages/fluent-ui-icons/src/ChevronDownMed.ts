import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1024 1657L25 658l121-121 878 878 878-878 121 121-999 999z'
    }
  ]
]

export default createIcon(jsx, 'ChevronDownMed')
