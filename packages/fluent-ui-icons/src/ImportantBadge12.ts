import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M853 171h342v1024H853V171zm0 1706v-341h342v341H853z'
    }
  ]
]

export default createIcon(jsx, 'ImportantBadge12')
