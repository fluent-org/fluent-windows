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
        'M205 1024h819v819H819v-469l-674 674L0 1903l674-674H205v-205zm1169-205h469v205h-819V205h205v469L1903 0l145 145z'
    }
  ]
]

export default createIcon(jsx, 'ChromeBackToWindow')
