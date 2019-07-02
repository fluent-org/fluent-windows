import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M2048 0v2048H0V0h2048zm-128 128H128v1280h512v512h1280V128z'
    }
  ]
]

export default createIcon(jsx, 'ResizeMouseSmall')
