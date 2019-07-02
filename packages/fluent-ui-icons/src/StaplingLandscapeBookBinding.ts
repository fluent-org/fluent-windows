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
        'M2048 128v1664H0V128h2048zm-128 128H128v1408h1792V256zm-896 1280H896v-384h128v384zm0-768H896V384h128v384z'
    }
  ]
]

export default createIcon(jsx, 'StaplingLandscapeBookBinding')
