import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1920 1536l-960 320L0 1536 960 192zm-896 164l691-231-691-967v1198zm-819-231l691 231V502z'
    }
  ]
]

export default createIcon(jsx, 'DialShape2')
