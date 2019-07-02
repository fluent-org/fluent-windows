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
        'M1536 768v128H256V768h1280zm0-384v128H256V384h1280zm256 384v128h-128V768h128zm0-384v128h-128V384h128zm-256 1024v128H256v-128h1280zm0 256v128H256v-128h1280zm256-256v128h-128v-128h128zm0 256v128h-128v-128h128zM0 1152h2048v896H0v-896zm1920 768v-640H128v640h1792z'
    }
  ]
]

export default createIcon(jsx, 'QuarentinedItemsMirrored')
