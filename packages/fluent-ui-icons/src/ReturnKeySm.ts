import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1536 640h128v512H603l338 339-90 90-493-493 493-493 90 90-338 339h933V640z'
    }
  ]
]

export default createIcon(jsx, 'ReturnKeySm')
