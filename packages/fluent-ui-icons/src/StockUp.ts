import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1024 384l640 1280H384l640-1280z'
    }
  ]
]

export default createIcon(jsx, 'StockUp')
