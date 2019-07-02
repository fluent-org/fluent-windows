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
        'M2048 768l-632 486 248 794-640-492-640 492 248-794L0 768h784L1024 0l240 768h784zm-627 932l-154-493 405-311h-502l-146-467-146 467h-46v646l192-148z'
    }
  ]
]

export default createIcon(jsx, 'OutlineQuarterStarLeft')
