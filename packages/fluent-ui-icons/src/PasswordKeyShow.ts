import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M512 512h1024v1024H512V512zm896 896V640H640v768h768z'
    }
  ]
]

export default createIcon(jsx, 'PasswordKeyShow')
