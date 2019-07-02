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
        'M1757 916q41 0 81.5 1t81.5 1h65q27 5 45 20t18 45q0 26-19 44.5t-45 18.5q-59 0-116.5-1t-116.5-1q-420 0-841 20.5T71 1131q-2 0-3.5.5t-3.5.5q-26 0-45-19t-19-45 16-42.5 41-21.5q36-7 81-9.5t83-6.5q82-8 164-14.5T549 961q603-45 1208-45z'
    }
  ]
]

export default createIcon(jsx, 'HWPStrikeThrough')
