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
        'M1792 0v1920H128V0h1664zm-128 128H256v1664h1408V128zm-128 1536H384V256h1152v1408zM1408 384H512v1152h896V384zm-128 256H640V512h640v128zm0 256H640V768h640v128zm0 256H640v-128h640v128zm0 256H640v-128h640v128z'
    }
  ]
]

export default createIcon(jsx, 'PPSOnePortrait')
