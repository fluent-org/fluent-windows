import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1536 384h-384v1280h384v384H384v-384h384V384H384V0h1152v384z'
    }
  ]
]

export default createIcon(jsx, 'IBeamOutline')
