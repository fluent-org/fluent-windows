import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1792 1088h64v128h-64v320H256V768h1536v320zm-64 384V832H320v640h1408z'
    }
  ]
]

export default createIcon(jsx, 'Battery0')
