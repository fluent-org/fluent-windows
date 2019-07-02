import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1920 512v896H0V512h1920zM896 640H128v640h768V640zm896 0h-768v640h768V640z'
    }
  ]
]

export default createIcon(jsx, 'CollateLandscape')
