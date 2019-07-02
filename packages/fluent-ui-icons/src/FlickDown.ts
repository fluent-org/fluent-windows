import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1024 1024l1024 1024H0l1024-1024z'
    }
  ]
]

export default createIcon(jsx, 'FlickDown')
