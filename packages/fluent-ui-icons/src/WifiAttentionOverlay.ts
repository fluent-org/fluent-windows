import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1152 2048H0L576 896zm-512-256H512v128h128v-128zm0-128v-384H512v384h128z'
    }
  ]
]

export default createIcon(jsx, 'WifiAttentionOverlay')
