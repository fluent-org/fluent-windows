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
        'M1408 128q26 0 49.5 10t41 27.5 27.5 41 10 49.5v1664H512V256q0-26 10-49.5t27.5-41 41-27.5 49.5-10h768zm0 128H640v1536h768V256zm-128 256H768V384h512v128zm0 896H768v-128h512v128zm0 256H768v-128h512v128z'
    }
  ]
]

export default createIcon(jsx, 'DirectAccess')
