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
        'M629 215L448 320l181 105-64 110-181-104v209H256V431L75 535 11 425l181-105L11 215l64-110 181 104V0h128v209l181-104 64 110z'
    }
  ]
]

export default createIcon(jsx, 'ActionCenterAsterisk')
