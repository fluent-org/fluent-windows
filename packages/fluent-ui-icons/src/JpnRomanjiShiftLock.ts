import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M0 0h1920v1920H0V0zm1443 893l90-90-573-573-573 573 90 90 419-418v1317h128V475z'
    }
  ]
]

export default createIcon(jsx, 'JpnRomanjiShiftLock')
