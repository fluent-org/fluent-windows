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
        'M2048 0v2048H0V0h2048zm-128 128H128v1792h1792V128zM768 1627l-429-430 90-90 339 338 851-850 90 90z'
    }
  ]
]

export default createIcon(jsx, 'CheckboxComposite')
