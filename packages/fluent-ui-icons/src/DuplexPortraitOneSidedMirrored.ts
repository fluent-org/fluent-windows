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
        'M1792 1792h-256v256H128V256h256V0h1408v1792zM1408 384H256v1536h1152V384zm256-256H512v128h1024v1408h128V128zm-384 768H768V512h512v384zm-128-256H896v128h256V640zm-512 0H384V512h256v128zm0 256H384V768h256v128zm640 256H384v-128h896v128zm0 256H384v-128h896v128zm0 256H384v-128h896v128z'
    }
  ]
]

export default createIcon(jsx, 'DuplexPortraitOneSidedMirrored')
