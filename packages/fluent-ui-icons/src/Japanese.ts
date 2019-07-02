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
        'M256 0h1536v2048h-128v-128H384v128H256V0zm1408 1792v-768H384v768h1280zm0-896V128H384v768h1280z'
    }
  ]
]

export default createIcon(jsx, 'Japanese')
