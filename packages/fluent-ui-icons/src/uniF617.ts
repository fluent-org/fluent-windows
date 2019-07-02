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
        'M1792 1280h128v384h-384v-128h256v-256zm128-1024v384h-128V384h-256V256h384zM128 640H0V256h384v128H128v256zm0 896h256v128H0v-384h128v256zM256 512h1408v896H256V512zm128 768h1152V640H384v640z'
    }
  ]
]

export default createIcon(jsx, 'uniF617')
