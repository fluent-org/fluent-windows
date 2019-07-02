import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1619 941l-467-466v1317h-128V475L557 941l-90-90 621-621 621 621z'
    }
  ]
]

export default createIcon(jsx, 'UpArrowShiftKey')
