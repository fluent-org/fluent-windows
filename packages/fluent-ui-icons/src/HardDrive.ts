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
        'M1856 640q40 0 75 15t61 41 41 61 15 75v576H0V832q0-40 15-75t41-61 61-41 75-15h1664zm64 192q0-26-19-45t-45-19H192q-26 0-45 19t-19 45v448h1792V832zm-256 64h128v128h-128V896zm-256 0h128v128h-128V896z'
    }
  ]
]

export default createIcon(jsx, 'HardDrive')
