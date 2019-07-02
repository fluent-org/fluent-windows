import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M11 1637l226-677L11 283l2031 677zm339-741h1096L213 485zm-137 539l1233-411H350z'
    }
  ]
]

export default createIcon(jsx, 'Send')
