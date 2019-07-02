import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1920 1280H0V0h1920v1280zM128 1152h1664V128H128v1024z'
    }
  ]
]

export default createIcon(jsx, 'DeviceMonitorNoPic')
