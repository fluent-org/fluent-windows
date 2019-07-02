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
        'M2048 256v1536H0V256h2048zm-128 128H128v1280h1792V384zm-256 1024H384V896h1280v512zm-128-384H512v256h1024v-256z'
    }
  ]
]

export default createIcon(jsx, 'SIPUndock')
