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
        'M1664 832l384 192-384 192 384 192-1024 512L0 1408l384-192L0 1024l384-192L0 640l1024-512 1024 512zM286 640l738 369 738-369-738-369zm1476 768l-241-120-497 248-497-248-241 120 738 369zm-738-15l738-369-241-120-497 248-497-248-241 120z'
    }
  ]
]

export default createIcon(jsx, 'MapLayers')
