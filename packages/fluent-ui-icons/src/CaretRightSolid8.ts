import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M512 0l1024 1024L512 2048V0z'
    }
  ]
]

export default createIcon(jsx, 'CaretRightSolid8')
