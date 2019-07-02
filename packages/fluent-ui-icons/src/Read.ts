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
        'M1024 120l1024 512v1288H0V632zm873 580l-873-436-873 436 324 324h1098zM128 1792h1792V859l-293 293H421L128 859v933z'
    }
  ]
]

export default createIcon(jsx, 'Read')
