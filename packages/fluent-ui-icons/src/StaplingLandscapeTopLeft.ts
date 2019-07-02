import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M2048 128v1664H0V128h2048zm-128 128H128v1408h1792V256zM365 749l-90-90 256-256 90 90z'
    }
  ]
]

export default createIcon(jsx, 'StaplingLandscapeTopLeft')
