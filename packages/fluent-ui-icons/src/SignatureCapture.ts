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
        'M640 640q0 18-.5 40.5t4.5 42 18.5 32.5 41.5 13h320v128H704q-40 0-75-15t-61-41-41-61-15-75v-64h128zm1024 384V512H384v512h496l128 128H256V384h1536v768h-240l-128-128h240zm-531-109l915 914-91 91-914-915-19-109zm915-787v1520l-128-128V256H128v1396q218 70 442.5 105t453.5 35q127 0 251.5-11t249.5-32l5 31-5-31 67-14 107 108q-169 37-335.5 57t-339.5 20q-265 0-519.5-45T0 1744V128h512V0h1024v128h512z'
    }
  ]
]

export default createIcon(jsx, 'SignatureCapture')
