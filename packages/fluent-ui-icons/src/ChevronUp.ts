import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1955 1533l-931-930-931 930-90-90L1024 421l1021 1022z'
    }
  ]
]

export default createIcon(jsx, 'ChevronUp')
