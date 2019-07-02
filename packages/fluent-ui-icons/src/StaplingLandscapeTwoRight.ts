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
        'M.125 128v1664h2047.88V128H.125zm127.992 128h1791.89v1408H128.117V256zM1664.02 1536h127.992v-384H1664.02v384zm0-768h127.992V384H1664.02v384z'
    }
  ]
]

export default createIcon(jsx, 'StaplingLandscapeTwoRight')
