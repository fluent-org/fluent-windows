import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1491 653l-403-401v1796H961V249L557 653l-90-90L1024 6l557 557z'
    }
  ]
]

export default createIcon(jsx, 'ResizeTouchShorter')
