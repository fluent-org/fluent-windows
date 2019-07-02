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
        'M1010 171q110 9 211 45t188 93.5T1566.5 444t121 168.5 77.5 195 27 214.5q0 118-30.5 227t-86 204-134 173.5-173.5 134-204 86-227 30.5q-120 0-232.5-32t-211-92-179-145T179 1417q19 2 37 3t37 1q118 0 227-30.5t204-86 173.5-134 134-173.5 86-204 30.5-227q0-103-25-203.5T1010 171zm-73 1536q142 0 266.5-54t217.5-147 146.5-217.5T1621 1022q0-93-24.5-181.5t-70-165.5T1416 533.5 1269 424q5 35 7.5 71t2.5 71q0 175-56.5 335t-158 291.5T822 1419t-310 140q94 72 200.5 110t224.5 38z'
    }
  ]
]

export default createIcon(jsx, 'QuietHoursBadge12')
