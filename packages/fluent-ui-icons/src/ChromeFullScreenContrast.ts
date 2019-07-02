import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M819 0h1229v1229h-410V699l-939 939h530v410H0V819h410v530l939-939H819V0z'
    }
  ]
]

export default createIcon(jsx, 'ChromeFullScreenContrast')
