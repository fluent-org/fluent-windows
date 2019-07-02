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
        'M960 256q115 0 221 30t198.5 84T1548 500t130 168.5 84 198.5 30 221-30 221-84 198.5-130 168.5-168.5 130-198.5 84-221 30-221-30-198.5-84T372 1676t-130-168.5-84-198.5-30-221 30-221 84-198.5T372 500t168.5-130T739 286t221-30z'
    }
  ]
]

export default createIcon(jsx, 'StatusCircleInner')
