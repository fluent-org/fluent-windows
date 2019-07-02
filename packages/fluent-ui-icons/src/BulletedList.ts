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
        'M0 1280v-128h128v128H0zm0-384V768h128v128H0zm384 0V768h1664v128H384zM0 512V384h128v128H0zm384-128h1664v128H384V384zm0 896v-128h1664v128H384zM0 1664v-128h128v128H0zm384 0v-128h1664v128H384z'
    }
  ]
]

export default createIcon(jsx, 'BulletedList')
