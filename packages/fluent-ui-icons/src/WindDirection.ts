import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1024 0l683 2048-683-683-683 683L1024 0z'
    }
  ]
]

export default createIcon(jsx, 'WindDirection')
