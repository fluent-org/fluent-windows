import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1416 1254l248 794-640-492-640 492 248-794L0 768h784L1024 0l240 768h784z'
    }
  ]
]

export default createIcon(jsx, 'FavoriteStarFill')
