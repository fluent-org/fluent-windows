import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M960 102l445 445-90 90-291-290v1701H896V347L605 637l-90-90 445-445z'
    }
  ]
]

export default createIcon(jsx, 'uniEAC2')
