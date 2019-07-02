import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1024 1792H896v-128h128v128zm0-256H896V896h128v640z'
    }
  ]
]

export default createIcon(jsx, 'StatusTriangleExclamation')
