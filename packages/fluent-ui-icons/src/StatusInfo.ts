import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1408 1408h128v384h-128v-384zm128-256v128h-128v-128h128z'
    }
  ]
]

export default createIcon(jsx, 'StatusInfo')
