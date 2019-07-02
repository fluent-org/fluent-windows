import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M896 2048V512h256v1536H896zM896 0h256v256H896V0z'
    }
  ]
]

export default createIcon(jsx, 'Info2')
