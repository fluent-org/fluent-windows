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
        'M1920 0v1280h-256v-128h128V128h-768v256H896V128H128v1024h128v128H0V0h1920zM376 504h1168v1424H376V504zm144 1280h880V648H520v1136z'
    }
  ]
]

export default createIcon(jsx, 'CollatePortraitSeparated')
