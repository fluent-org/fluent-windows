import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M2048 896v256H490l459 459-181 181L0 1024l768-768 181 181-459 459h1558z'
    }
  ]
]

export default createIcon(jsx, 'ArrowLeft8')
