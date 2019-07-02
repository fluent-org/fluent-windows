import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M128 1792v-384h256v384H128zm384-640h256v640H512v-640z'
    }
  ]
]

export default createIcon(jsx, 'MobSignal2')
