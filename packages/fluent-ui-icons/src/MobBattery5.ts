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
        'M2816 896h128v256h-128v512H256V384h2560v512zm-128 640V512H384v1024h2304zM1536 640v768H512V640h1024z'
    }
  ]
]

export default createIcon(jsx, 'MobBattery5')
