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
        'M0 79q53 0 91.5-20.5T165 0h91v640H128V182q-30 13-62.5 19T0 207V79zM640 0q53 0 99.5 20T821 75t55 81.5 20 99.5v384H384V256q0-53 20-99.5T459 75t81.5-55T640 0zm0 112q-30 0-56 11.5t-45.5 31-31 45.5-11.5 56h288q0-30-11.5-56t-31-45.5-45.5-31-56-11.5z'
    }
  ]
]

export default createIcon(jsx, 'StatusDualSIM1VPN')
