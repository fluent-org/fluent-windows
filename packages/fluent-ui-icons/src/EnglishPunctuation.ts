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
        'M1664 1024l-239 768h-267l169-768h337zM576 288q60 0 112.5 22.5T780 372t61.5 91.5T864 576t-22.5 112.5T780 780t-91.5 61.5T576 864t-112.5-22.5T372 780t-61.5-91.5T288 576t22.5-112.5T372 372t91.5-61.5T576 288z'
    }
  ]
]

export default createIcon(jsx, 'EnglishPunctuation')
