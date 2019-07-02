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
        'M1664 128h128v1792H256V128h128v128h640v128H384v256h256v128H384v256h640v128H384v256h256v128H384v256h1280V128z'
    }
  ]
]

export default createIcon(jsx, 'Ruler')
