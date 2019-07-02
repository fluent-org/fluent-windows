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
        'M1732 714l-537 310 537 310-86 148-537-310v620H939v-620l-537 310-86-148 537-310-537-310 86-148 537 310V256h170v620l537-310 86 148z'
    }
  ]
]

export default createIcon(jsx, 'AsteriskBadge12')
