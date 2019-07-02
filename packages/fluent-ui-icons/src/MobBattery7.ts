import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 3072 2048'
  },
  [
    'path',
    {
      d:
        'M2944 896v256h-128v512H256V384h2560v512h128zm-256-384H384v1024h2304V512zm-768 896H512V640h1408v768z'
    }
  ]
]

export default createIcon(jsx, 'MobBattery7')
