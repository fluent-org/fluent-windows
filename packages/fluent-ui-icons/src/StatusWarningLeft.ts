import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M640 1280v384H512v-384h128zm-128 512h128v128H512v-128z'
    }
  ]
]

export default createIcon(jsx, 'StatusWarningLeft')
