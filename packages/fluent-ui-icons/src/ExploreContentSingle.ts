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
        'M1792 256v1664H128V256h1664zm-128 128H256v1408h1408V384zm-768 768H512v-128h384V640h128v384h384v128h-384v384H896v-384z'
    }
  ]
]

export default createIcon(jsx, 'ExploreContentSingle')
