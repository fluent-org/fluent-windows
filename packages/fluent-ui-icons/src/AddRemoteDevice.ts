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
        'M1024 1408v128h256v128H640v-128h256v-128H512v256H0V896h128V384h1664v768h-128V512H256v384h256v384h1024v128h-512zm-640 128v-512H128v512h256zm1408 0h256v128h-256v256h-128v-256h-256v-128h256v-256h128v256z'
    }
  ]
]

export default createIcon(jsx, 'AddRemoteDevice')
