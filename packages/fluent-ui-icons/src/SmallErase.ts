import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1408 640v768H640V640h768zm-128 128H768v512h512V768z'
    }
  ]
]

export default createIcon(jsx, 'SmallErase')
