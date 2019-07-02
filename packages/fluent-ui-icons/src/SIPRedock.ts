import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M2048 256v1536H0V256h2048zm-128 1024H128v384h1792v-384zm0-128V384H128v768h1792z'
    }
  ]
]

export default createIcon(jsx, 'SIPRedock')
