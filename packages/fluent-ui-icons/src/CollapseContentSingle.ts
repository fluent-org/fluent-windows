import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1792 256v1664H128V256h1664zm-128 128H256v1408h1408V384zm-256 768H512v-128h896v128z'
    }
  ]
]

export default createIcon(jsx, 'CollapseContentSingle')
