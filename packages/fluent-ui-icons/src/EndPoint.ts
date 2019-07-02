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
        'M1152 256h768v1024h-896v-256H384v1024H256V0h896v256zM384 896h640V128H384v768zm1408 256V384h-640v768h640z'
    }
  ]
]

export default createIcon(jsx, 'EndPoint')
