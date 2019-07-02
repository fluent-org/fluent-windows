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
        'M2048 512h-256v256h256v128h-256v256h256v128h-256v256h256v128h-256v128h-128v256h-128v-256h-256v256h-128v-256H896v256H768v-256H512v256H384v-256H256v-128H0v-128h256v-256H0v-128h256V896H0V768h256V512H0V384h256V256h128V0h128v256h256V0h128v256h256V0h128v256h256V0h128v256h128v128h256v128zm-384 1152V384H384v1280h1280z'
    }
  ]
]

export default createIcon(jsx, 'Component')
