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
        'M0 256h2048v1408H0V256zm1920 1280V384h-128v128h-128V384H384v128H256V384H128v1152h128v-128h128v128h1280v-128h128v128h128zM256 768V640h128v128H256zm0 256V896h128v128H256zm0 256v-128h128v128H256zm1408-512V640h128v128h-128zm0 256V896h128v128h-128zm0 256v-128h128v128h-128z'
    }
  ]
]

export default createIcon(jsx, 'Movies')
