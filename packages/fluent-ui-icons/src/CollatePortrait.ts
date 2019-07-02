import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1920 384v1280H0V384h1920zM896 512H128v1024h768V512zm896 0h-768v1024h768V512z'
    }
  ]
]

export default createIcon(jsx, 'CollatePortrait')
