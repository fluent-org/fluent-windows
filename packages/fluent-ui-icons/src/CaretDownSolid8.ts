import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M0 512h2048L1024 1536 0 512z'
    }
  ]
]

export default createIcon(jsx, 'CaretDownSolid8')
