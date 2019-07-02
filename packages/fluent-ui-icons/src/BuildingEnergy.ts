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
        'M1024 896v896H512V896h512zM384 0h1408v2048h-128V128H512v512h128V512h256v128h384v1408H256V640h128V0zm768 768H384v1152h768V768zM768 384H640V256h128v128zm256 0H896V256h128v128zm128 0V256h128v128h-128zm256 0V256h128v128h-128zm0 256V512h128v128h-128zm0 256V768h128v128h-128zm0 256v-128h128v128h-128zm0 256v-128h128v128h-128zm0 256v-128h128v128h-128zm0 256v-128h128v128h-128z'
    }
  ]
]

export default createIcon(jsx, 'BuildingEnergy')
