import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1902 1511l-878-878-878 878-121-121 999-999 999 999-121 121z'
    }
  ]
]

export default createIcon(jsx, 'ChevronUpMed')
