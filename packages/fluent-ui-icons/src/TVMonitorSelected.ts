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
        'M1024 1408v320H576v-128h320v-192H0V256h1920v817l-128 128V384H128v896h1585l-128 128h-561zm915-125l90 91-557 557-269-269 90-91 179 179z'
    }
  ]
]

export default createIcon(jsx, 'TVMonitorSelected')
