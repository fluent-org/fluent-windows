import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1027.06 0H3.12v1024h127.992V219l1826.89 1826 89.994-90L222.106 128h804.951V0z'
    }
  ]
]

export default createIcon(jsx, 'GoMirrored')
