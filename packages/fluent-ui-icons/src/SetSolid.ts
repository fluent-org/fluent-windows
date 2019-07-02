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
        'M2048 640v1280H512V640h1536zm-128 128H640v128h1280V768zm-128-256H384v1152H256V384h1536v128zm-256-256H128v1152H0V128h1536v128z'
    }
  ]
]

export default createIcon(jsx, 'SetSolid')
