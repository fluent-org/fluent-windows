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
        'M0 0h1920v1024h-896v896H0V0zm896 1792v-768H128v768h768zm0-896V128H128v768h768zm896 0V128h-768v768h768z'
    }
  ]
]

export default createIcon(jsx, 'AppIconDefault')
