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
        'M1920 0v1280H0V0h1920zM896 1152q0-106-27.5-204T791 764.5 671 609 515.5 489 332 411.5 128 384v768h768zm896-1024H128v128q124 0 238.5 32t214 90.5 181 140 140 181 90.5 214 32 238.5h768V128z'
    }
  ]
]

export default createIcon(jsx, 'DeviceMonitorLeftPic')
