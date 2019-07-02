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
        'M1664 1024q53 0 99.5 20t81.5 55 55 81.5 20 99.5v128h128v640h-768v-640h128v-128q0-53 20-99.5t55-81.5 81.5-55 99.5-20zm-128 384h256v-128q0-27-10-50t-27.5-40.5-40.5-27.5-50-10-50 10-40.5 27.5-27.5 40.5-10 50v128zm384 128h-512v384h512v-384zm128-1152v736l-128-128V512H128v1024h1024v128H0V384h2048z'
    }
  ]
]

export default createIcon(jsx, 'LockscreenDesktop')
