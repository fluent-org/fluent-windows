import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M2048 960v128h-960v960H960v-960H0V960h960V0h128v960h960z'
    }
  ]
]

export default createIcon(jsx, 'Add')
