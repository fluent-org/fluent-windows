import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M0 0h896v91L512 475v165H384V475L0 91V0zm384 293V128H219zm128 0l165-165H512v165z'
    }
  ]
]

export default createIcon(jsx, 'StatusSGLTE')
