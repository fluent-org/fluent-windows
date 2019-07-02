import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M256 0v640H128V182q-30 13-62.5 19T0 207V79q53 0 91.5-20.5T165 0h91z'
    }
  ]
]

export default createIcon(jsx, 'StatusDualSIM1')
