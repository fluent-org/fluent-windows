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
        'M1024 640v549l256 256v566l-320-321-320 321v-566l256-256V640H640L960 0l320 640h-256zm-64-354L847 512h226zm192 1415v-202l-192-193-192 193v202l192-191z'
    }
  ]
]

export default createIcon(jsx, 'Directions')
