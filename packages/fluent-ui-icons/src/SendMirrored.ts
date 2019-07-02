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
        'M2042 1637l-225.986-677L2042 283 11.12 960zm-338.98-741H607.09l1232.92-411zm136.99 539L607.09 1024h1095.93z'
    }
  ]
]

export default createIcon(jsx, 'SendMirrored')
