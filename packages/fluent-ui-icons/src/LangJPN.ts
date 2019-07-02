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
        'M512 2048H383V385h1280v1663h-127v-256H512v256zm1024-1024V512H512v512h1024zm0 641v-512H512v512h1024z'
    }
  ]
]

export default createIcon(jsx, 'LangJPN')
