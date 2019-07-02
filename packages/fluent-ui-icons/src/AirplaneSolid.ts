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
        'M1856 768q40 0 75 15t61 41 41 61 15 75-15 75-41 61-61 41-75 15h-544l-384 768H662l256-768H256l-67 128H0l108-320L0 640h189l67 128h662L662 0h266l384 768h544z'
    }
  ]
]

export default createIcon(jsx, 'AirplaneSolid')
