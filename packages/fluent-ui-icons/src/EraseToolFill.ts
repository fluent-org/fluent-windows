import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1152 1664l-192 192H480L97 1473q-17-17-25-38t-8-42.5 7.5-42T95 1313l353-353z'
    }
  ]
]

export default createIcon(jsx, 'EraseToolFill')
