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
        'M.125 677v1115h2047.88V128H549.095zm511.969-37H219.112l292.982-293v293zM128.117 1664V768h511.969V256h1279.92v1408H128.116z'
    }
  ]
]

export default createIcon(jsx, 'LandscapeOrientationMirrored')
