import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1664 384v1280H384V384h1280zm-128 128H512v1024h1024V512z'
    }
  ]
]

export default createIcon(jsx, 'LargeErase')
