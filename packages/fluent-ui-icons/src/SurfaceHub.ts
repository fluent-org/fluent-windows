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
        'M0 384h2048v1280H0V384zm256 1152V512H128v1024h128zm1408 0V512H384v1024h1280zm256 0V512h-128v1024h128z'
    }
  ]
]

export default createIcon(jsx, 'SurfaceHub')
