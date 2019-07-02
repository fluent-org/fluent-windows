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
        'M1005 1261l-90-90 146-147-146-147 90-90 147 146 147-146 90 90-146 147 146 147-90 90-147-146zM768 512h896v1024H768l-512-512zm768 896V640H821l-384 384 384 384h715z'
    }
  ]
]

export default createIcon(jsx, 'BackSpaceQWERTYSm')
