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
        'M1920 256H.12v1408H1920V256zM128.109 1536V384h767.953v128h127.992V384h767.953v1152h-767.953v-128H896.062v128H128.109zm639.961-510V898H451.09l94.994-96-67.996-68-225.986 228 225.986 224 67.996-68-92.994-92h314.98zm255.98-130V640H896.058v256h127.992zm0 384v-256H896.058v256h127.992z'
    }
  ]
]

export default createIcon(jsx, 'ReduceTileMirrored')
