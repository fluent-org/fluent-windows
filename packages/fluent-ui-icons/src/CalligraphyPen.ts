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
        'M1669 965l-454 907q-3 37-19 69t-42 56-59.5 37.5-70.5 13.5q-38 0-71-13.5t-59-37.5-42-56-19-69L379 965l151-453H384V0h128v384h1024V0h128v512h-146zm-138-10l-148-443H665L517 955l443 886v-834q-29-17-46.5-47T896 896q0-27 10-50t27.5-40.5T974 778t50-10 50 10 40.5 27.5T1142 846t10 50q0 34-17.5 64t-46.5 47v834z'
    }
  ]
]

export default createIcon(jsx, 'CalligraphyPen')
