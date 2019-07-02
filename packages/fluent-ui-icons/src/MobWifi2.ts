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
        'M1152 1792q0-106 27.5-204.5T1257 1404t120-155 155-120 183.5-77.5T1920 1024v128q-88 0-170 23t-153 64.5-129.5 100-100 129.5-64.5 153-23 170h-128zm576-384q40 0 75 15t61 41 41 61 15 75-15 75-41 61-61 41-75 15-75-15-61-41-41-61-15-75 15-75 41-61 61-41 75-15z'
    }
  ]
]

export default createIcon(jsx, 'MobWifi2')
