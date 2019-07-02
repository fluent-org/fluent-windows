import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M384 0l384 768H0zm0 286L207 640h354z'
    }
  ]
]

export default createIcon(jsx, 'SignalRoaming')
