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
        'M1792 2047.875V-.005H128v2047.88h1664zm-128-127.992H256V127.993h1408v1791.89zm-896-255.985H384v127.992h384v-127.992zm768 0h-384v127.992h384v-127.992z'
    }
  ]
]

export default createIcon(jsx, 'StaplingPortraitTwoBottom')
