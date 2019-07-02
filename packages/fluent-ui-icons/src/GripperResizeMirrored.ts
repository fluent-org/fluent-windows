import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M.125 1061v987h986.939zm127.992 310l548.967 549H128.117v-549z'
    }
  ]
]

export default createIcon(jsx, 'GripperResizeMirrored')
