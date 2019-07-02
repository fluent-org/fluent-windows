import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M128 1920v-128h1664v128H128zm979-301l594-595H128V896h1573l-594-595 90-90 749 749-749 749z'
    }
  ]
]

export default createIcon(jsx, 'RightArrowKeyTime4')
