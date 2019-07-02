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
        'M1792 1024h128v896h-128v-896zm128-640h-128V0h128v384zm-64 128q40 0 75 15t61 41 41 61 15 75-15 75-41 61-61 41-75 15-75-15-61-41-41-61-15-75 15-75 41-61 61-41 75-15zM0 512h1408v896H0V512zm128 768h1152V640H128v640zM1280 0h128v384H0V0h128v256h1152V0zM0 1536h1408v384h-128v-256H128v256H0v-384z'
    }
  ]
]

export default createIcon(jsx, 'TaskViewSettings')
