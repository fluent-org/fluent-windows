import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M0 1536v-128h1280v128H0zm0-640h2048v128H0V896zm1664-512v128H0V384h1664z'
    }
  ]
]

export default createIcon(jsx, 'List')
