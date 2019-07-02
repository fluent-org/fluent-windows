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
        'M2048 384v128H768V384h1280zM768 768h1280v128H768V768zm0 384h1280v128H768v-128zm0 384h1280v128H768v-128zM478 990l68 68-354 354-178-178 68-68 110 110zm0-768l68 68-354 354L14 466l68-68 110 110z'
    }
  ]
]

export default createIcon(jsx, 'MultiSelect')
