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
        'M1024 384q132 0 248.5 50.5T1476 572t137.5 203.5T1664 1024t-50.5 248.5T1476 1476t-203.5 137.5T1024 1664t-248.5-50.5T572 1476t-137.5-203.5T384 1024t50.5-248.5T572 572t203.5-137.5T1024 384z'
    }
  ]
]

export default createIcon(jsx, 'Record')
