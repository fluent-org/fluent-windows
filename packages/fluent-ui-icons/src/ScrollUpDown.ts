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
        'M1024 219L429 813l-90-90 685-686 685 686-90 90zm0 1610l595-594 90 90-685 686-685-686 90-90z'
    }
  ]
]

export default createIcon(jsx, 'ScrollUpDown')
