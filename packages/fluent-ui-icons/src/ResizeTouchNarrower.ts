import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M2048 1088H250l403 403-90 90L6 1024l557-557 90 90-403 403h1798v128z'
    }
  ]
]

export default createIcon(jsx, 'ResizeTouchNarrower')
