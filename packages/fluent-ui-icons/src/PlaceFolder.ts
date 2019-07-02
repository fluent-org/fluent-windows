import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1024 0l1024 1024-1024 1024L0 1024zM136 1024l888 888 888-888-888-888z'
    }
  ]
]

export default createIcon(jsx, 'PlaceFolder')
