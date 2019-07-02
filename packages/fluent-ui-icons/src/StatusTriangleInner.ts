import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1664 1920H256L960 512z'
    }
  ]
]

export default createIcon(jsx, 'StatusTriangleInner')
