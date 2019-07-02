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
        'M1792 0v2048H128V0h1664zm-128 128h-128v128h128V128zm-256 1536V384H512v1280h896zm-896 128v128h896v-128H512zM384 384H256v1280h128V384zm1024-128V128H512v128h896zm128 1408h128V384h-128v1280zM256 128v128h128V128H256zm0 1792h128v-128H256v128zm1408 0v-128h-128v128h128z'
    }
  ]
]

export default createIcon(jsx, 'PageMarginPortraitNarrow')
