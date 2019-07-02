import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1408 256h-384v1536h384v128H512v-128h384V256H512V128h896v128z'
    }
  ]
]

export default createIcon(jsx, 'IBeam')
