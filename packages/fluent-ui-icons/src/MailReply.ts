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
        'M2048 384v1082q-29-23-61-39.5t-67-28.5V583l-896 449-896-449v953h1024v128H0V384h2048zM1024 888l753-376H271zm475 648q50 0 110.5-2.5t121.5.5 118 14.5 101.5 40 71 77.5 26.5 126q0 53-20.5 99.5t-55 81-81.5 55-99 20.5v-128q27 0 50-10t40.5-27.5 27.5-40.5 10-50-10-50-27.5-40.5-40.5-27.5-50-10h-293l162 163-90 90-317-317 317-317 90 90z'
    }
  ]
]

export default createIcon(jsx, 'MailReply')
