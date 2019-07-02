import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M0 768h2048v128H0V768zm0 512v-128h2048v128H0z'
    }
  ]
]

export default createIcon(jsx, 'GripperBarHorizontal')
