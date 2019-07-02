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
        'M2048 0H.12v1664h639.961l383.977 384 383.977-384h639.961V0zM384.102 768h1279.92v128H384.102V768zm0-384h1279.92v128H384.102V384zm511.968 768h767.953v128H896.07v-128z'
    }
  ]
]

export default createIcon(jsx, 'ActionCenterNotificationMirrored')
