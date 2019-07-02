import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1792 0v2048H128V549L677 0h1115zM347 512h293V219zm1317-384H768v512H256v1280h1408V128z'
    }
  ]
]

export default createIcon(jsx, 'PageMirrored')
