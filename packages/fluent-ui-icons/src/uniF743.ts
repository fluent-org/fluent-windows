import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M584 1024l940 940-72 72L440 1024 1452 12l72 72z'
    }
  ]
]

export default createIcon(jsx, 'uniF743')
