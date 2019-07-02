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
        'M1404 1047l-215 571-572-214 46-120 334 125q-61-120-93-250t-32-265q0-146 40-286t123-260l106 72q-72 104-107 225t-35 247q0 133 35 261.5t102 243.5l148-396z'
    }
  ]
]

export default createIcon(jsx, 'RotateMapRight')
