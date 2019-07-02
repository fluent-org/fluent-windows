import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M515 1955l930-931L515 93l90-90 1022 1021L605 2045z'
    }
  ]
]

export default createIcon(jsx, 'ChevronRight')
