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
        'M2048 128v1664H0V128h2048zm-128 128H128v1408h1792V256zM640 512H256V384h384v128zm1152 0h-384V384h384v128z'
    }
  ]
]

export default createIcon(jsx, 'StaplingLandscapeTwoTop')
