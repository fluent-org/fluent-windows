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
        'M1416 1254l248 794-640-492-640 492 248-794L0 768h784L1024 0l240 768h784zm5 446q-38-124-76-246.5t-78-246.5q103-77 203-155t202-156h-502l-146-467-146 467H376q102 78 202 156t203 155q-40 124-78 246.5T627 1700l397-306z'
    }
  ]
]

export default createIcon(jsx, 'FavoriteStar')
