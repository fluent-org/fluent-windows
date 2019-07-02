import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1837 557L768 1627l-557-558 90-90 467 466 979-978z'
    }
  ]
]

export default createIcon(jsx, 'CheckMark')
