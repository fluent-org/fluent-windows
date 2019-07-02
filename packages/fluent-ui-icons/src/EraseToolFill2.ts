import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1248 160l704 704-800 800-704-704 800-800z'
    }
  ]
]

export default createIcon(jsx, 'EraseToolFill2')
