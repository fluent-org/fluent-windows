import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1024 1024L0 2048V0l1024 1024z'
    }
  ]
]

export default createIcon(jsx, 'FlickLeft')
