import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M64 448h1920v1152H64V448z'
    }
  ]
]

export default createIcon(jsx, 'MailFill')
