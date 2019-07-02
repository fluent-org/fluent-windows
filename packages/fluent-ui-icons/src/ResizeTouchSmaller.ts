import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1683 1773L384 472v552H256V256h768v128H476l1297 1299z'
    }
  ]
]

export default createIcon(jsx, 'ResizeTouchSmaller')
