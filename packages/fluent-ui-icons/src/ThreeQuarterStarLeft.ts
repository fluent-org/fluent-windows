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
        'M1024 0q2 8 12 38t23.5 74.5 30.5 99 34.5 110 34 108T1188 523t20.5 66l7.5 25v1089l-192-147-640 492 248-794L0 768h784L1024 0z'
    }
  ]
]

export default createIcon(jsx, 'ThreeQuarterStarLeft')
