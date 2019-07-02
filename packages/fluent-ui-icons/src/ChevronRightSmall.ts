import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M590 7l1017 1017L590 2041l-241-242 775-775-775-775L590 7z'
    }
  ]
]

export default createIcon(jsx, 'ChevronRightSmall')
