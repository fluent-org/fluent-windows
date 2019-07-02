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
        'M2048 1536h-256v256H0V384h256V128h1792v1408zM1664 512H128v1152h1536V512zm256-256H384v128h1408v1024h128V256zM768 1024H256V640h512v384zM640 768H384v128h256V768zm896 0H896V640h640v128zm0 256H896V896h640v128zm0 256H256v-128h1280v128zm0 256H256v-128h1280v128z'
    }
  ]
]

export default createIcon(jsx, 'DuplexLandscapeOneSided')
