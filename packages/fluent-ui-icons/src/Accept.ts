import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M640 1755L19 1133l90-90 531 530L1939 275l90 90L640 1755z'
    }
  ]
]

export default createIcon(jsx, 'Accept')
