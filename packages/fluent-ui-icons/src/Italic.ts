import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1302 0h134L754 2048H619L1302 0z'
    }
  ]
]

export default createIcon(jsx, 'Italic')
