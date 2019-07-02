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
        'M1792 0v2048H128V0h1664zm-128 128H256v1792h1408V128zm-896 896H384V896h384v128zm768 0h-384V896h384v128z'
    }
  ]
]

export default createIcon(jsx, 'StaplingPortraitBookBinding')
