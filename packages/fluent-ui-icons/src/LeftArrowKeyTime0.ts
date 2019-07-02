import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1920 896v128H347l594 595-90 90-749-749 749-749 90 90-594 595h1573z'
    }
  ]
]

export default createIcon(jsx, 'LeftArrowKeyTime0')
