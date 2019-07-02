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
        'M1497.03 589l307.981 309H262.101v128h1539.91l-304.981 305 89.994 90 460.972-461-460.972-461zM134.117 512H6.125v896h127.992V512z'
    }
  ]
]

export default createIcon(jsx, 'Export')
