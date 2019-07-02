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
        'M2048 1243l-358 357 358 357-91 91-357-358-357 358-91-91 357-357-357-357 91-91 357 357 357-357 91 91z'
    }
  ]
]

export default createIcon(jsx, 'SignalError')
