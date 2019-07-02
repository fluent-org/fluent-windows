import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M512 1408h128v384H512v-384zm128-256v128H512v-128h128z'
    }
  ]
]

export default createIcon(jsx, 'StatusInfoLeft')
