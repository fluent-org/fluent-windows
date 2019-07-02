import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1939 467l90 90-1005 1005L19 557l90-90 915 915z'
    }
  ]
]

export default createIcon(jsx, 'ChevronDown')
