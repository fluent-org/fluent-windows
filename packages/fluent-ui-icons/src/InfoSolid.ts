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
        'M960 0q132 0 255 34.5t229.5 97 194 150 150 194 97 229.5 34.5 255-34.5 255-97 229.5-150 194-194 150-229.5 97-255 34.5-255-34.5-229.5-97-194-150-150-194-97-229T0 960q0-132 34.5-255t97-229.5 150-194 194-150 229-97T960 0zm64 768H896v640h128V768zm0-256H896v128h128V512z'
    }
  ]
]

export default createIcon(jsx, 'InfoSolid')
