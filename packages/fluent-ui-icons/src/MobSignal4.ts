import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d:
        'M128 1792v-384h256v384H128zm384 0v-640h256v640H512zm384 0V896h256v896H896zm384-1152h256v1152h-256V640z'
    }
  ]
]

export default createIcon(jsx, 'MobSignal4')
