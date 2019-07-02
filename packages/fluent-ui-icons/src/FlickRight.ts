import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1024 1024L2048 0v2048L1024 1024z'
    }
  ]
]

export default createIcon(jsx, 'FlickRight')
