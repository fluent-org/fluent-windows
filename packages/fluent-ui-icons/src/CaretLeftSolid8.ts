import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M512 1024L1536 0v2048L512 1024z'
    }
  ]
]

export default createIcon(jsx, 'CaretLeftSolid8')
