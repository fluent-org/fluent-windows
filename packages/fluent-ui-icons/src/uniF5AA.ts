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
        'M1187 509L896 219v165H768V0h384v128H987l290 291zM384 0l384 768H0zm177 640L384 286 207 640h354z'
    }
  ]
]

export default createIcon(jsx, 'uniF5AA')
