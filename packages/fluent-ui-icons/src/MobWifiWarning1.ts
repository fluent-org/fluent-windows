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
        'M1728 1408q40 0 75 15t61 41 41 61 15 75-15 75-41 61-61 41-75 15-75-15-61-41-41-61-15-75 15-75 41-61 61-41 75-15zM512 1728v-320h128v320H512zm0 192v-128h128v128H512zM0 2048L576 896l576 1152H0zm181-112h790l-395-790z'
    }
  ]
]

export default createIcon(jsx, 'MobWifiWarning1')
