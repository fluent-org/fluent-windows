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
        'M2048 384v1280H0V384h2048zM143 512l881 441 881-441H143zm1777 1024V648l-896 447-896-447v888h1792z'
    }
  ]
]

export default createIcon(jsx, 'Mail')
