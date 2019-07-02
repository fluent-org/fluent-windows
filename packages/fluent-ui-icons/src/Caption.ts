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
        'M0 256h2048v1536H0V256zm1920 1408V384H128v1280h1792zM1792 512v1024H256V512h1536zm-128 896V640H384v768h1280zM0 2048v-128h1280v128H0z'
    }
  ]
]

export default createIcon(jsx, 'Caption')
