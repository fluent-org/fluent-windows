import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M768 2048V0h128v2048H768zM1152 0h128v2048h-128V0z'
    }
  ]
]

export default createIcon(jsx, 'GripperBarVertical')
