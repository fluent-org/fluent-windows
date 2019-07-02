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
        'M1024 429l-10 32.5-25.5 82-33.5 108-34.5 110-28.5 89-14 45.5H376l405 311-154 493 397-306v162l-640 492 248-794L0 768h784L1024 0v429z'
    }
  ]
]

export default createIcon(jsx, 'OutlineStarLeftHalf')
