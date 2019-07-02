import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M509 419l-90 90-291-290v165H0V0h384v128H219l290 291z'
    }
  ]
]

export default createIcon(jsx, 'StatusDataTransfer')
