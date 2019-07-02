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
        'M1792 1152h256v896H768v-896h256V896h768v256zm-640-128v128h512v-128h-512zm768 256H896v256h128v-128h128v128h512v-128h128v128h128v-256zM896 1920h1024v-256h-128v128h-128v-128h-512v128h-128v-128H896v256zM128 384v768h512v128H0V256h1792v512h-128V384H128z'
    }
  ]
]

export default createIcon(jsx, 'Manage')
