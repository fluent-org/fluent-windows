import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1408 1280h128v384h-128v-384zm0 640v-128h128v128h-128z'
    }
  ]
]

export default createIcon(jsx, 'StatusWarning')
