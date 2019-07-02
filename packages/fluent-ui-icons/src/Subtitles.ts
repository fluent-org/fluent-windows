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
        'M0 128h2048v1408H731l-475 475v-475H0V128zm1920 1280V256H128v1152h256v293l293-293h1243zm-128-256v128H256v-128h1536zm0-256v128H256V896h1536z'
    }
  ]
]

export default createIcon(jsx, 'Subtitles')
