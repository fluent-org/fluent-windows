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
        'M1152 379l806 645-806 650V379zm128 266v762l474-383zM256 1674V379l806 645zM384 645v762l474-383z'
    }
  ]
]

export default createIcon(jsx, 'FastForward')
