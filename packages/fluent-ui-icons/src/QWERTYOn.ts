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
        'M1024 384h768v896h-128v-128h-640v768H896v-768H256v128H128V384h768V0h128v384zm-768 640h640V512H256v512zm768-512v512h640V512h-640z'
    }
  ]
]

export default createIcon(jsx, 'QWERTYOn')
