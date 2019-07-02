import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d:
        'M7.125 1024h1655.9l-673.958 674 143.991 145 921.943-921L1133.058 0 989.067 145l673.958 674H7.125v205z'
    }
  ]
]

export default createIcon(jsx, 'ChromeBackMirrored')
