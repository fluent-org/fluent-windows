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
        'M805 1493l-418-417 103-104 315 314 753-752 103 103zM2048 0v2048H0V0h2048zm-146 146H146v1756h1756V146z'
    }
  ]
]

export default createIcon(jsx, 'CheckboxComposite14')
