import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1536 760l512-256v1040l-512-256v248H0V512h1536v248z'
    }
  ]
]

export default createIcon(jsx, 'PresenceChickletVideo')
