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
        'M0 128h2048v128H0V128zm256 384h1536v128H256V512zm0 768h1536v128H256v-128zM0 1792v-128h2048v128H0zm0-768V896h2048v128H0z'
    }
  ]
]

export default createIcon(jsx, 'AlignCenter')
