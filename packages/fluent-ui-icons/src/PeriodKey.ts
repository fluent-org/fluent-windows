import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 606 2048'
  },
  [
    'path',
    {
      d:
        'M301 1319q67 0 123 25t96.5 68 63 101 22.5 123-23 122.5-63.5 101.5-96.5 69.5-122 25.5q-65 0-120.5-26T85 1859t-62.5-102T0 1636q0-64 22.5-121.5t62-101 95-69T301 1319zm0 501q39 0 71.5-14.5T428 1766t35.5-58.5T476 1636t-12.5-71.5-35.5-58-55.5-39T301 1453q-40 0-71.5 14.5t-53.5 39-34 58-12 71.5q0 37 12 70.5t34.5 58.5 54 40 70.5 15z'
    }
  ]
]

export default createIcon(jsx, 'PeriodKey')
