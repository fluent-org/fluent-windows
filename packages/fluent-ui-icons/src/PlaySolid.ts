import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1792 1024L512 1920V128z'
    }
  ]
]

export default createIcon(jsx, 'PlaySolid')
