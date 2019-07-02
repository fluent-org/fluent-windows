import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1664 256h128v1536h-128V256zM256 1792V256l1088 768zM384 503v1042l738-521z'
    }
  ]
]

export default createIcon(jsx, 'Next')
