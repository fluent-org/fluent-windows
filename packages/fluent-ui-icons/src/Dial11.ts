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
        'M264 423q134-43 254-118t226-167h41v1622H643V341q-35 30-82 61.5t-98.5 59-103 50.5-95.5 36V423zm1371-285v1622h-142V341q-37 32-83.5 62.5t-96.5 58-101.5 50T1114 548V423q135-44 254-119t226-166h41z'
    }
  ]
]

export default createIcon(jsx, 'Dial11')
