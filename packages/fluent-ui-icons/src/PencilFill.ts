import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1024 1920l-352-704h704zM320 0h1408v544l-384-192-320 160-320-160-384 192V0z'
    }
  ]
]

export default createIcon(jsx, 'PencilFill')
