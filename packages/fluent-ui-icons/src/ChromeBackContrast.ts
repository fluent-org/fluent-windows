import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M2048 819v410H784l530 529-290 290L0 1024 1024 0l290 290-530 529h1264z'
    }
  ]
]

export default createIcon(jsx, 'ChromeBackContrast')
