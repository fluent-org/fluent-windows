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
        'M1536 256h384v1536h-384V256zm-512 1536V640h384v1152h-384zm-512 0v-768h384v768H512zm-512 0v-384h384v384H0z'
    }
  ]
]

export default createIcon(jsx, 'FourBars')
