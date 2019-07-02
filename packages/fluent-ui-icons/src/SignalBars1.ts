import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M384 2048H128v-256h256v256z'
    }
  ]
]

export default createIcon(jsx, 'SignalBars1')
