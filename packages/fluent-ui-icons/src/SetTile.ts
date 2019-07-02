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
        'M523 1451l437-438 437 438-74 74-299-298v821H896v-821l-299 298zM512 0h896v896H512V0zm768 768V128H640v640h640z'
    }
  ]
]

export default createIcon(jsx, 'SetTile')
