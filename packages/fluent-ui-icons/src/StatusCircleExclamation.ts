import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M896 1408h128v128H896v-128zm128-768v640H896V640h128z'
    }
  ]
]

export default createIcon(jsx, 'StatusCircleExclamation')
