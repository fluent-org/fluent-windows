import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1408 1024v128H512v-128h896z'
    }
  ]
]

export default createIcon(jsx, 'StatusCircleBlock2')
