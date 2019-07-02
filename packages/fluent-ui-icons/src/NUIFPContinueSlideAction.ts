import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1029 1052l29 29-166 166-168-167 29-30 119 119V758h41v411l116-117z'
    }
  ]
]

export default createIcon(jsx, 'NUIFPContinueSlideAction')
