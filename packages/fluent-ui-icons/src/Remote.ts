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
        'M259 733l90-90 701 701-701 701-90-90 611-611zM1789 93l-611 611 611 611-90 90-701-701L1699 3z'
    }
  ]
]

export default createIcon(jsx, 'Remote')
