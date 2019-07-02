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
        'M1664.02 1792v-128H.12v128h1663.9zM2048 384V256h-127.992v128H2048zm0 1024v-128h-127.992v128H2048zm-383.98 0v-128H.12v128h1663.9zm0-1152H.12v128h1663.9V256zm0 512V640H.12v128h1663.9z'
    }
  ]
]

export default createIcon(jsx, 'ShowResultsMirrored')
