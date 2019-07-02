import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M0 1408V512h1408v896H0zm1536-640l512-256v896l-512-256V768z'
    }
  ]
]

export default createIcon(jsx, 'VideoSolid')
