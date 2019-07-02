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
        'M768 512h1280v128H768V512zm0 640v-128h1280v128H768zm0 512v-128h1280v128H768zM255 768L0 512h512z'
    }
  ]
]

export default createIcon(jsx, 'ShowBcc')
