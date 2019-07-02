import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1699 249l-775 775 775 775-241 242L441 1024 1458 7l241 242z'
    }
  ]
]

export default createIcon(jsx, 'ChevronLeftSmall')
