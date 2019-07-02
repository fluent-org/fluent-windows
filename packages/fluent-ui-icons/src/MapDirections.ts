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
        'M1024 0l1024 1024-1024 1024L0 1024zM768 1611l256 256 843-843-843-843-843 843 459 459V896h549L979 685l90-90 365 365-365 365-90-90 210-211H768v587z'
    }
  ]
]

export default createIcon(jsx, 'MapDirections')
