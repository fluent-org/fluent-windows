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
        'M640 640h1408v128H640V640zm1408-384v128H640V256h1408zM384 128v128H256v512h128v128H128V128h256zm256 1408h1408v128H640v-128zm0-384h1408v128H640v-128zm-256-128v128H256v512h128v128H128v-768h256z'
    }
  ]
]

export default createIcon(jsx, 'GroupList')
