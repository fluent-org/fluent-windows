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
        'M2048 128v128H0V128h2048zm0 1664H0v-128h2048v128zm0-768H0V896h2048v128zm-512-384H0V512h1536v128zm0 768H0v-128h1536v128z'
    }
  ]
]

export default createIcon(jsx, 'AlignLeft')
