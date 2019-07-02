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
        'M1920 896v128H0V896h896V0h128v896h896zM256 768H128V256h128v512zm256 0H384V384h128v384zm256 0H640V128h128v640zm896-512h-512V128h512v128zm-128 256h-384V384h384v128zm256 256h-640V640h640v128zM128 1152h512v896H128v-896zm128 768h256v-640H256v640zm1152-768h512v896h-512v-896zm128 768h256v-640h-256v640zm-768-768h512v896H768v-896zm128 768h256v-640H896v640z'
    }
  ]
]

export default createIcon(jsx, 'InteractiveDashboard')
