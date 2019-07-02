import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M2028 1372l-683 656-364-335 86-94 276 254 597-573z'
    }
  ]
]

export default createIcon(jsx, 'NetworkConnectedCheckmark')
