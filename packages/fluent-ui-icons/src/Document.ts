import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M549 0h1243v1755l-293 293H256V293zm1115 1701V128H603L384 347v1573h1061z'
    }
  ]
]

export default createIcon(jsx, 'Document')
