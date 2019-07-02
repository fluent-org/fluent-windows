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
        'M1088 1024H960V0h128v1024zm212-724q138 44 252.5 128t196 197T1875 873t45 279q0 124-32 238.5t-90.5 214-140 181-181 140-214 90.5-238.5 32-238.5-32-214-90.5-181-140-140-181-90.5-214-32-238.5q0-144 45-279t126.5-248 196-197T748 300l40 121q-119 39-217 111T403 700 294.5 911.5 256 1152q0 106 27.5 204t77.5 183.5T481 1695t155.5 120 183.5 77.5 204 27.5 204-27.5 183.5-77.5 155.5-120 120-155.5 77.5-183.5 27.5-204q0-125-38.5-240.5T1645 700t-168-168-217-111z'
    }
  ]
]

export default createIcon(jsx, 'PowerButton')
