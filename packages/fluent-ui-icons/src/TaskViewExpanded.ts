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
        'M1792 1536h128v384h-128v-384zm128-640h-128V0h128v896zm-64 128q40 0 75 15t61 41 41 61 15 75-15 75-41 61-61 41-75 15-75-15-61-41-41-61-15-75 15-75 41-61 61-41 75-15zM0 0h1408v896H0V0zm128 768h1152V128H128v640zM0 1024h1408v896H0v-896zm128 768h1152v-640H128v640z'
    }
  ]
]

export default createIcon(jsx, 'TaskViewExpanded')
