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
        'M2048 1791.883v-1663.9H0v1663.9h2048zm-128-127.992H128V255.981h1792v1407.91zM640 1407.906H256v127.992h384v-127.992zm1152 0h-384v127.992h384v-127.992z'
    }
  ]
]

export default createIcon(jsx, 'StaplingLandscapeTwoBottom')
