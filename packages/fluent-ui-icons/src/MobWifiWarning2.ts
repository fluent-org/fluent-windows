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
        'M1728 1408q40 0 75 15t61 41 41 61 15 75-15 75-41 61-61 41-75 15-75-15-61-41-41-61-15-75 15-75 41-61 61-41 75-15zm-575 357q0-102 29-196.5t81-177 124-150 157-116 180.5-75T1920 1024v128q-88 0-170 23t-153 64.5-129.5 100-100 129.5-64.5 153-23 170h-113q-1-1-3-5t-4.5-8.5-4.5-8.5-2-5zm-641-37v-320h128v320H512zm0 192v-128h128v128H512zM0 2048L576 896l576 1152H0zm181-112h790l-395-790z'
    }
  ]
]

export default createIcon(jsx, 'MobWifiWarning2')
