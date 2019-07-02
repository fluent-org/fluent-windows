import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1210 138v1622h-142V341q-38 32-84 63t-96 58-101 49-98 37V423q135-44 254-119t226-166h41z'
    }
  ]
]

export default createIcon(jsx, 'Dial1')
