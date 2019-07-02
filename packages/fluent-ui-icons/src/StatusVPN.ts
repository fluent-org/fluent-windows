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
        'M256 0q53 0 99.5 20T437 75t55 81.5 20 99.5v384H0V256q0-53 20-99.5T75 75t81.5-55T256 0zm0 112q-30 0-56 11.5t-45.5 31-31 45.5-11.5 56h288q0-30-11.5-56t-31-45.5-45.5-31-56-11.5z'
    }
  ]
]

export default createIcon(jsx, 'StatusVPN')
