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
        'M1030.06 896v128l771.953 1-288.982 290 89.994 90 444.973-445-444.973-445-89.994 90 291.982 292zM902.07 512H6.125v896H902.07V512zM134.117 896V640h255.984v256H134.117zm383.977-256h255.984v256H518.094V640zm255.984 384v256H518.094v-256h255.984zm-383.976 256H134.118v-256h255.984v256z'
    }
  ]
]

export default createIcon(jsx, 'ImportAllMirrored')
