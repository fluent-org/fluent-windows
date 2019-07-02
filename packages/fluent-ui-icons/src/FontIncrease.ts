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
        'M1027 128l555 1664h-135l-170-512H643l-170 512H338L893 128h134zm207 1024L960 330l-274 822h548zm814-768h-640l320-320z'
    }
  ]
]

export default createIcon(jsx, 'FontIncrease')
