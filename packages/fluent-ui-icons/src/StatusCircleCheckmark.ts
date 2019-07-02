import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1453 941l-621 621-365-365 90-90 275 275 531-531z'
    }
  ]
]

export default createIcon(jsx, 'StatusCircleCheckmark')
