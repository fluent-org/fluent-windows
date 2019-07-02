import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1152 1408H896V128h256v1280zm0 512H896v-256h256v256z'
    }
  ]
]

export default createIcon(jsx, 'Important')
