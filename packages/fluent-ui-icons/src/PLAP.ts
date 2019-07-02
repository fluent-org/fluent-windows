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
        'M2048 1280h-384v128h128v128h-384v-128h128v-256h384V640h-384V512h512v768zm-1280 0v128h384v128H256v-128h387v-128H0V384h1408v896H768zm-640-128h1152V512H128v640z'
    }
  ]
]

export default createIcon(jsx, 'PLAP')
