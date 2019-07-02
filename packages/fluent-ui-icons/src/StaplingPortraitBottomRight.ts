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
        'M128.109 0v2048h1663.9V0h-1663.9zm127.993 128h1407.91v1792H256.102V128zM1261.04 1773l255.984-256-89.994-90-255.984 256z'
    }
  ]
]

export default createIcon(jsx, 'StaplingPortraitBottomRight')
