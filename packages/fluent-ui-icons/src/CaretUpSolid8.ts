import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1024 512l1024 1024H0L1024 512z'
    }
  ]
]

export default createIcon(jsx, 'CaretUpSolid8')
