import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1875 1037l-787-787v1798H960V250l-787 787-90-90L1024 6l941 941z'
    }
  ]
]

export default createIcon(jsx, 'Up')
