import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M2048 1024H640V896h1408v128zM257 896L0 1152h512L257 896z'
    }
  ]
]

export default createIcon(jsx, 'HideBcc')
