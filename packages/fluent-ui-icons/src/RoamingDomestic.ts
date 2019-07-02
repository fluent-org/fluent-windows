import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1024 410l717 1433H307zm0 229L473 1741h1102z'
    }
  ]
]

export default createIcon(jsx, 'RoamingDomestic')
