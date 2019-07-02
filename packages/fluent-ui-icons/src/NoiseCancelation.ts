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
        'M0 768h128v128H0V768zm256-256h128v384H256V512zm256-384h128v768H512V128zm256 256h128v512H768V384zm256 384h128v128h-128V768zm896 0v128h-128V768h128zM0 1024h128v128H0v-128zm256 0h128v384H256v-384zm256 0h128v768H512v-768zm256 0h128v512H768v-512zm256 0h128v128h-128v-128zm768 0h128v128h-128v-128zm-256-256h128v128h-128V768zm0 256h128v128h-128v-128zm-256-256h128v128h-128V768zm0 256h128v128h-128v-128z'
    }
  ]
]

export default createIcon(jsx, 'NoiseCancelation')
