import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M2048 1088H250l787 787-90 90L6 1024 947 83l90 90-787 787h1798v128z'
    }
  ]
]

export default createIcon(jsx, 'Back')
