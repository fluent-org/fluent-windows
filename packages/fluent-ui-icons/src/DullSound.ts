import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 717 2048'
  },
  [
    'path',
    {
      d:
        'M166 80q87 175 198 554l-175 60Q98 342 0 131zM528 0q113 222 189 541l-170 54Q469 279 364 49z'
    }
  ]
]

export default createIcon(jsx, 'DullSound')
