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
        'M1792 1856q0 40-15 75t-41 61-61 41-75 15-75-15-61-41-41-61-15-75 15-75 41-61 61-41 75-15 75 15 61 41 41 61 15 75z'
    }
  ]
]

export default createIcon(jsx, 'Wifi1')
