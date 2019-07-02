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
        'M2048 896v128h-821l298 299-74 74-438-437 438-437 74 74-298 299h821zM0 1408V512h896v896H0zm128-768v640h640V640H128z'
    }
  ]
]

export default createIcon(jsx, 'ExpandTile')
