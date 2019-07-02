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
        'M.125 128v1664h2047.88V128H.125zm127.992 128h1791.89v1408H128.117V256zM1683.02 749l89.994-90-255.984-256-89.994 90z'
    }
  ]
]

export default createIcon(jsx, 'StaplingLandscapeTopRight')
