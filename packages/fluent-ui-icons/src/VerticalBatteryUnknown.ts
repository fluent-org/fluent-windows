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
        'M755 1203l243-243-243-243 90-90 243 243 243-243 90 90-243 243 243 243-90 90-243-243-243 243zm909-1075v1792H512V128h384V0h384v128h384zm-128 128H640v1536h896V256z'
    }
  ]
]

export default createIcon(jsx, 'VerticalBatteryUnknown')
