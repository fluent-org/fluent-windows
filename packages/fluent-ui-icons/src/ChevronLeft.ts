import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1443 2045L421 1024 1443 3l90 90-930 931 930 931z'
    }
  ]
]

export default createIcon(jsx, 'ChevronLeft')
