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
        'M1024 171q118 0 227 30.5t203.5 86T1627 421t133.5 172.5 86 203.5 30.5 227-30.5 227-86 203.5T1627 1627t-172.5 133.5-203.5 86-227 30.5-227-30.5-203.5-86T421 1627t-133.5-172.5-86-203.5-30.5-227 30.5-227 86-203.5T421 421t172.5-133.5 203.5-86 227-30.5z'
    }
  ]
]

export default createIcon(jsx, 'CircleRingBadge12')
