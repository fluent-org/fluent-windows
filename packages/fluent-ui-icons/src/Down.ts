import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1965 1101l-941 941-941-941 90-90 787 787V0h128v1798l787-787z'
    }
  ]
]

export default createIcon(jsx, 'Down')
