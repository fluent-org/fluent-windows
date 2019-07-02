import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1372 631H947v328h391v195H947v459H685V435h687v196z'
    }
  ]
]

export default createIcon(jsx, 'BoldF')
