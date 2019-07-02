import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1792 0h256v2048H0v-256h1792V0z'
    }
  ]
]

export default createIcon(jsx, 'InkingCaret')
