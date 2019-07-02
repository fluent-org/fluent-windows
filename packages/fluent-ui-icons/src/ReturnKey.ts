import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1792 1152H475l466 467-90 90-621-621 621-621 90 90-466 467h1189V384h128v768z'
    }
  ]
]

export default createIcon(jsx, 'ReturnKey')
