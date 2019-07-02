import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1024 441l1017 1017-242 241-775-775-775 775L7 1458 1024 441z'
    }
  ]
]

export default createIcon(jsx, 'ChevronUpSmall')
