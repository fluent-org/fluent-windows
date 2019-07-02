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
        'M1472 896q119 0 224 45.5t183 123.5 123.5 183 45.5 224-45.5 224-123.5 183-183 123.5-224 45.5-224-45.5-183-123.5-123.5-183-45.5-224 45.5-224 123.5-183 183-123.5 224-45.5z'
    }
  ]
]

export default createIcon(jsx, 'StatusCircle')
