import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M883 1203l90 90-493 493-301-301 90-90 211 210 403-402z'
    }
  ]
]

export default createIcon(jsx, 'StatusCheckmarkLeft')
