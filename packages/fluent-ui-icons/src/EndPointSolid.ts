import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M256 2048V0h768v1024H384v1024H256zm896-1792h768v1024h-768V256z'
    }
  ]
]

export default createIcon(jsx, 'EndPointSolid')
