import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1024 410l717 1433H307l717-1433z'
    }
  ]
]

export default createIcon(jsx, 'RoamingInternational')
