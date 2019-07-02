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
        'M2048 1536v-128H768.08v128H2048zm0-640H.12v128H2048V896zM384.102 384v128h1663.9V384h-1663.9z'
    }
  ]
]

export default createIcon(jsx, 'ListMirrored')
