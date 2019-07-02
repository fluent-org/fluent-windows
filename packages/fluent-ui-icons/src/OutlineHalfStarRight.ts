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
        'M2048 768l-632 486 248 794-640-492-640 492 248-794L0 768h784L1024 0l240 768h784zm-1024 626V429L878 896H376l405 311-154 493z'
    }
  ]
]

export default createIcon(jsx, 'OutlineHalfStarRight')
