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
        'M1767 402l-622 622 622 622-121 121-622-622-622 622-121-121 622-622-622-622 121-121 622 622 622-622 121 121z'
    }
  ]
]

export default createIcon(jsx, 'ErrorBadge12')
