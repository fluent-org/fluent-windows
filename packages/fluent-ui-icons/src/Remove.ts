import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M2048 1088H0V960h2048v128z'
    }
  ]
]

export default createIcon(jsx, 'Remove')
