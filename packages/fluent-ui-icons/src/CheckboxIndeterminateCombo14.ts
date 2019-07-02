import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1609 1609H439V439h1170v1170zM2048 0v2048H0V0h2048zm-146 146H146v1756h1756V146z'
    }
  ]
]

export default createIcon(jsx, 'CheckboxIndeterminateCombo14')
