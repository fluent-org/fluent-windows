import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1029 254l29 29-166 166-168-168 29-29 119 118V0h41v370l116-116z'
    }
  ]
]

export default createIcon(jsx, 'NUIFPStartSlideAction')
