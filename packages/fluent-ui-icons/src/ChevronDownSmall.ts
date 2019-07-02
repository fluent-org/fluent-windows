import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z'
    }
  ]
]

export default createIcon(jsx, 'ChevronDownSmall')
