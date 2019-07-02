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
        'M2048 384v1152h-475l-256-256H0V640h1317l256-256h475zM128 1152h1152V768H128v384zm1499 256h37V512h-37l-219 219v458zm293-896h-128v896h128V512zm-832 384q26 0 45 19t19 45-19 45-45 19-45-19-19-45 19-45 45-19z'
    }
  ]
]

export default createIcon(jsx, 'Flashlight')
