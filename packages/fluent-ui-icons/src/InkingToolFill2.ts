import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M288 448h1472l-448 896H736L288 448z'
    }
  ]
]

export default createIcon(jsx, 'InkingToolFill2')
