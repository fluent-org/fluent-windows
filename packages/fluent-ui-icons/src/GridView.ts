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
        'M0 896V0h896v896H0zm128-768v640h640V128H128zM0 1920v-896h896v896H0zm128-768v640h640v-640H128zm896 768v-896h896v896h-896zm128-768v640h640v-640h-640zM1024 0h896v896h-896V0zm768 768V128h-640v640h640z'
    }
  ]
]

export default createIcon(jsx, 'GridView')
