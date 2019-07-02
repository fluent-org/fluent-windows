import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 875 2048'
  },
  [
    'path',
    {
      d:
        'M327 223q-55 0-89 31t-53 76.5-25.5 98T153 523h176v343H0V523q0-52 7-106t22-105 40-95.5 61.5-77.5 85-52.5T327 67v156zm548 300v343H543V523q0-52 7-106t23-104.5 41.5-95 62-78 84.5-53T871 67v156q-56 0-90 31t-52 76.5-24 98-6 94.5h176z'
    }
  ]
]

export default createIcon(jsx, 'LeftDoubleQuote')
