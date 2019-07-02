import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M704 1944v-728h640v408zM64 0h1920v448H64V0z'
    }
  ]
]

export default createIcon(jsx, 'HighlightFill')
