import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1920 2048H0L960 128zm-896-384H896v128h128v-128zm0-128V896H896v640h128z'
    }
  ]
]

export default createIcon(jsx, 'IncidentTriangle')
