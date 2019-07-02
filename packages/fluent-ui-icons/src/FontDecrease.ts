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
        'M1027 768l342 1024h-135l-85-256H771l-85 256H551L893 768h134zm79 640L960 971l-146 437h292zM2048 0l-320 320L1408 0h640z'
    }
  ]
]

export default createIcon(jsx, 'FontDecrease')
