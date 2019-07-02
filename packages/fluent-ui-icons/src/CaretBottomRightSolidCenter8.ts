import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1792 320v1472H320z'
    }
  ]
]

export default createIcon(jsx, 'CaretBottomRightSolidCenter8')
