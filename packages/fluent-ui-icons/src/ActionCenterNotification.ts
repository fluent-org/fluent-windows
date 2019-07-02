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
        'M0 0h2048v1664h-640l-384 384-384-384H0V0zm1664 768H384v128h1280V768zm0-384H384v128h1280V384zm-512 768H384v128h768v-128z'
    }
  ]
]

export default createIcon(jsx, 'ActionCenterNotification')
