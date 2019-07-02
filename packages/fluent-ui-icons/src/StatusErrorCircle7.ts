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
        'M1690 1600l147 147-90 90-147-147-147 147-90-90 147-147-147-147 90-90 147 147 147-147 90 90z'
    }
  ]
]

export default createIcon(jsx, 'StatusErrorCircle7')
