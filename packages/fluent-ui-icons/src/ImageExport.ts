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
        'M1152 640h768v1408H0V640h768v128H128v1152h1664V768h-640V640zM896 245L621 520l-90-91L960 0l429 429-90 91-275-275v907H896V245zm-128 779H384v640h1152v-640h-384V896h512v896H256V896h512v128z'
    }
  ]
]

export default createIcon(jsx, 'ImageExport')
