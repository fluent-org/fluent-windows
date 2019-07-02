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
        'M2048 384H.12v1024l127.992-128V583l895.945 449 895.945-449v953H896.062v128h1151.93V384zM1024.06 888L271.106 512h1505.91zM413.1 1373l-89.994-90-316.98 317 316.98 317 89.994-90-162.99-163h517.969v-128H250.11z'
    }
  ]
]

export default createIcon(jsx, 'MailForwardMirrored')
