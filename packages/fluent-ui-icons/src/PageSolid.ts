import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1755 512h-475V37zm37 128v1408H128V0h1024v640h640z'
    }
  ]
]

export default createIcon(jsx, 'PageSolid')
