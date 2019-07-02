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
        'M1805 1229l-243 243 243 243-90 90-243-243-243 243-90-90 243-243-243-243 90-90 243 243 243-243 90 90z'
    }
  ]
]

export default createIcon(jsx, 'StatusError')
