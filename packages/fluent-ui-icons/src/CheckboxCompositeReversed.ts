import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M2048 0v2048H0V0h2048zm-339 685l-90-90-851 850-339-338-90 90 429 430z'
    }
  ]
]

export default createIcon(jsx, 'CheckboxCompositeReversed')
