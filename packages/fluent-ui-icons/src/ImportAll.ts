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
        'M1024 896v128l-772 1 289 290-90 90L6 960l445-445 90 90-292 292zm128-384h896v896h-896V512zm768 384V640h-256v256h256zm-384-256h-256v256h256V640zm-256 384v256h256v-256h-256zm384 256h256v-256h-256v256z'
    }
  ]
]

export default createIcon(jsx, 'ImportAll')
