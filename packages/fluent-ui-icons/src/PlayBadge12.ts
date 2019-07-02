import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M512 171l1365 853-1365 853V171zm171 308v1090l872-545z'
    }
  ]
]

export default createIcon(jsx, 'PlayBadge12')
