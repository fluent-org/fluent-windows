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
        'M1792 512v1408H640v-256H384v-256H128V0h731l256 256h421v256h256zM896 384h165L896 219v165zm256 896V512H768V128H256v1152h896zm256 256V384h-128v1024H512v128h896zm257-896h-129v1024H768v128h897V640zM640 384H384V256h256v128zM384 768h640v128H384V768zm0 256h640v128H384v-128zm256-384H384V512h256v128z'
    }
  ]
]

export default createIcon(jsx, 'PrintAllPages')
