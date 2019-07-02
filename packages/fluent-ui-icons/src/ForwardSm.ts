import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1690 1088l-493 493-90-90 338-339H384v-128h1061l-338-339 90-90 493 493z'
    }
  ]
]

export default createIcon(jsx, 'ForwardSm')
