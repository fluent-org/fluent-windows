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
        'M1416 1254l248 794-640-492-192 147V614l7.5-25 20.5-66 29.5-93.5 34-108 34.5-110 30.5-99L1012 38l12-38 240 768h784z'
    }
  ]
]

export default createIcon(jsx, 'ThreeQuarterStarRight')
