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
        'M2045 1373l-227 227 227 227-90 90-227-227-227 227-90-90 227-227-227-227 90-90 227 227 227-227zm-850 35h-171v128h256v128H640v-128h256v-128H0V256h1920v832l-128 128V384H128v896h1195z'
    }
  ]
]

export default createIcon(jsx, 'DisconnectDisplay')
