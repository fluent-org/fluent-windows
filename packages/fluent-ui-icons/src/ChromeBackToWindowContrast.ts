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
        'M102 1434v-410h922v922H614v-223l-324 325L0 1758l325-324H102zM2048 290l-325 324h223v410h-922V102h410v223L1758 0z'
    }
  ]
]

export default createIcon(jsx, 'ChromeBackToWindowContrast')
