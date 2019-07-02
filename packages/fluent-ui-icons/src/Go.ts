import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1024 0h1024v1024h-128V219L93 2045l-90-90L1829 128h-805V0z'
    }
  ]
]

export default createIcon(jsx, 'Go')
