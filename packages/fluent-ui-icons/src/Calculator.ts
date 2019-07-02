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
        'M256 0h1408v2048H256V0zm1280 1920V128H384v1792h1152zM1408 256v384H512V256h896zm-128 256V384H640v128h640zM640 896v128H512V896h128zm256 128V896h128v128H896zm384 0V896h128v128h-128zm-640 256v128H512v-128h128zm256 128v-128h128v128H896zm384 0v-128h128v128h-128zm-640 256v128H512v-128h128zm256 128v-128h128v128H896zm384 0v-128h128v128h-128z'
    }
  ]
]

export default createIcon(jsx, 'Calculator')
