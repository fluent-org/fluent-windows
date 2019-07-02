import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M955 2048V0h138v2048H955zM0 0h140l263 1536H263zm1908 0h140l-263 1536h-140z'
    }
  ]
]

export default createIcon(jsx, 'PuncKey2')
