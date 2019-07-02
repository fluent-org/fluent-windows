import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M128 1920v-128h384v128H128zM1197 211l749 749-749 749-90-90 594-595H128V896h1573l-594-595z'
    }
  ]
]

export default createIcon(jsx, 'RightArrowKeyTime1')
