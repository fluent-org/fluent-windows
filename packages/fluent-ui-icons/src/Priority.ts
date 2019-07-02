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
        'M768 1798l307-307 90 90-461 461-461-461 90-90 307 307V0h128v1798zM1536 0h128v1664h-128V0zm0 2048v-128h128v128h-128z'
    }
  ]
]

export default createIcon(jsx, 'Priority')
