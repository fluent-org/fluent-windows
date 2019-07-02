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
        'M383 256h1280v1665h-127v-256H512v256H383V256zm1153 1280v-512H512v512h1024zm0-639V385H512v512h1024z'
    }
  ]
]

export default createIcon(jsx, 'LanguageJpn')
