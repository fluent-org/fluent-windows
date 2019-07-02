import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M512 1024h896v128H512v-128z'
    }
  ]
]

export default createIcon(jsx, 'DashKey')
