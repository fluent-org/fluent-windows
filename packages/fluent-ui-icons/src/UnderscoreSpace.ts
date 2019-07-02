import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1792 1280H256V768h128v384h1280V768h128v512z'
    }
  ]
]

export default createIcon(jsx, 'UnderscoreSpace')
