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
        'M2048 512v896H256v-256H0V512h2048zm-128 640H384v128h1536v-128zm0-128V640H128v384h1792zm-320-256q26 0 45 19t19 45-19 45-45 19-45-19-19-45 19-45 45-19z'
    }
  ]
]

export default createIcon(jsx, 'XboxOneConsole')
