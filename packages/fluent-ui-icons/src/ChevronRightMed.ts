import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M658 2023l-121-121 878-878-878-878L658 25l999 999-999 999z'
    }
  ]
]

export default createIcon(jsx, 'ChevronRightMed')
