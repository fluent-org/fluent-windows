import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    width: '1792',
    height: '1792'
  },
  [
    'path',
    {
      d:
        'M1792 672l-553 425.25L1456 1792l-560-430.5L336 1792l217-694.75L0 672h686L896 0l210 672h686z'
    }
  ]
]

export default createIcon(jsx, 'FavoriteLegacy')
