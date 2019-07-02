import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M557 589L249 898h1543v128H252l305 305-90 90L6 960l461-461zm1363-77h128v896h-128V512z'
    }
  ]
]

export default createIcon(jsx, 'Import')
