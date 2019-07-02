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
        'M1050 1088l371 371-90 90-371-371-371 371-90-90 371-371-371-371 90-90 371 371 371-371 90 90z'
    }
  ]
]

export default createIcon(jsx, 'StatusCircleErrorX')
