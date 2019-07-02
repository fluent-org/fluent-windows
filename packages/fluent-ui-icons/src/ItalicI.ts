import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M967 1612H818l262-1176h150z'
    }
  ]
]

export default createIcon(jsx, 'ItalicI')
