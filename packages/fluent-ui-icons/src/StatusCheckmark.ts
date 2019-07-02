import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1747 1235l90 90-493 493-301-301 90-90 211 211 403-403z'
    }
  ]
]

export default createIcon(jsx, 'StatusCheckmark')
