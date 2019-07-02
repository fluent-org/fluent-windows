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
        'M1943 568l-791 456 791 456-64 112-791-457v913H960v-913l-791 457-64-112 791-456-791-456 64-112 791 457V0h128v913l791-457 64 112z'
    }
  ]
]

export default createIcon(jsx, 'Asterisk')
