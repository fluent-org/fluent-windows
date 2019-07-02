import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M128 1408h256v384H128v-384z'
    }
  ]
]

export default createIcon(jsx, 'MobSignal1')
