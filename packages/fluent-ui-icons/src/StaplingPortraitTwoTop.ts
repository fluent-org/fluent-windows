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
        'M1792 0v2048H128V0h1664zm-128 128H256v1792h1408V128zM768 384H384V256h384v128zm768 0h-384V256h384v128z'
    }
  ]
]

export default createIcon(jsx, 'StaplingPortraitTwoTop')
