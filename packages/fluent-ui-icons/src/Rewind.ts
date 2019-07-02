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
        'M896 1674L90 1024l806-645v1295zm-128-267V645l-474 379zm218-383l806-645v1295zm678 383V645l-474 379z'
    }
  ]
]

export default createIcon(jsx, 'Rewind')
