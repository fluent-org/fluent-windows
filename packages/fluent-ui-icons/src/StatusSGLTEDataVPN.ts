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
        'M1280 0q53 0 99.5 20t81.5 55 55 81.5 20 99.5v384h-512V256q0-53 20-99.5t55-81.5 81.5-55T1280 0zm0 112q-30 0-56 11.5t-45.5 31-31 45.5-11.5 56h288q0-30-11.5-56t-31-45.5-45.5-31-56-11.5zM0 0h896v91L512 475v165H384V475L0 91V0zm512 293l165-165H512v165zM219 128l165 165V128H219z'
    }
  ]
]

export default createIcon(jsx, 'StatusSGLTEDataVPN')
