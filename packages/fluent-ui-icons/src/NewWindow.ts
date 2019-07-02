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
        'M1024 1018v646H896v-646l-163 163-90-90 317-317 317 317-90 90zm768-635v1282h-641v-129h512V512H256v1024h512v129H127V383h1665z'
    }
  ]
]

export default createIcon(jsx, 'NewWindow')
