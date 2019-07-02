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
        'M384 2048H128v-256h256v256zm384 0H512v-512h256v512zm384 0H896v-768h256v768zm384 0h-256V1024h256v1024z'
    }
  ]
]

export default createIcon(jsx, 'SignalBars4')
