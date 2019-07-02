import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1024 0l1024 1024-1024 1024-290-290 530-529H0V819h1264L734 290 1024 0z'
    }
  ]
]

export default createIcon(jsx, 'ChromeBackContrastMirrored')
