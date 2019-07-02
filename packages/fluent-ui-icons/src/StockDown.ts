import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M384 384h1280l-640 1280L384 384z'
    }
  ]
]

export default createIcon(jsx, 'StockDown')
