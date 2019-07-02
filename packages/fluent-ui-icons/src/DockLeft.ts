import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M0 384h2048v1152H0V384zm128 128v896h384V512H128zm1792 896V512H640v896h1280z'
    }
  ]
]

export default createIcon(jsx, 'DockLeft')
