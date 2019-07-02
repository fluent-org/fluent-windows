import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1664 1280v384h-128v-384h128zm-128 512h128v128h-128v-128z'
    }
  ]
]

export default createIcon(jsx, 'StatusExclamationCircle7')
