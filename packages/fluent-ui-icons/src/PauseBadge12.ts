import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M512 1877V171h171v1706H512zm853-1706h171v1706h-171V171z'
    }
  ]
]

export default createIcon(jsx, 'PauseBadge12')
