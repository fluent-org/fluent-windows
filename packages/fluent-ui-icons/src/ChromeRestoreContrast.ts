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
        'M2048 0v1434h-614v614H0V614h614V0h1434zM1024 1638v-614H410v614h614zm614-614V410h-614v204h410v410h204z'
    }
  ]
]

export default createIcon(jsx, 'ChromeRestoreContrast')
