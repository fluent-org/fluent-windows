import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M11 1637l204-613h937l256-64-256-64H215L11 283l2031 677z'
    }
  ]
]

export default createIcon(jsx, 'SendFill')
