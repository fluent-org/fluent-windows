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
        'M1472 0l576 576L576 2048 0 1472zM181 1472l395 395L1867 576l-395-395-88 88 115 115-91 91-115-115-165 165 197 198-90 90-198-197-165 165 115 116-90 90-116-115-165 165 197 198-90 90-198-197-165 165 115 115-91 91-115-115z'
    }
  ]
]

export default createIcon(jsx, 'Unit')
