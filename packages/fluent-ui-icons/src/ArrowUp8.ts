import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1024 0l768 768-181 181-459-459v1558H896V490L437 949 256 768 1024 0z'
    }
  ]
]

export default createIcon(jsx, 'ArrowUp8')
