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
        'M1005 1261l-90-90 146-147-146-147 90-90 147 146 147-146 90 90-146 147 146 147-90 90-147-146zM742 512h922v1024H742l-512-512zm794 896V640H794l-384 384 384 384h742z'
    }
  ]
]

export default createIcon(jsx, 'BackSpaceQWERTYMd')
