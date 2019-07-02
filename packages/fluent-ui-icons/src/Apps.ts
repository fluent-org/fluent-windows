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
        'M2048 384v1408H0V384h2048zm-768 128H128v1152h1152V512zm640 640h-512v512h512v-512zm0-128V512h-512v512h512z'
    }
  ]
]

export default createIcon(jsx, 'Apps')
