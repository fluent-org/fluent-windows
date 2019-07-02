import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M2048 1061v987h-987zm-128 310l-549 549h549v-549z'
    }
  ]
]

export default createIcon(jsx, 'GripperResize')
