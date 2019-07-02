import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M576 896l576 1152H0L576 896z'
    }
  ]
]

export default createIcon(jsx, 'StatusTriangleLeft')
