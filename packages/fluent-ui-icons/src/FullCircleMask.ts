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
        'M2048 1024q0 141-36.5 272T1908 1540.5t-160.5 207-207 160.5-244.5 103.5-272 36.5-272-36.5T507.5 1908t-207-160.5-160.5-207T36.5 1296 0 1024t36.5-272T140 507.5t160.5-207 207-160.5T752 36.5 1024 0t272 36.5T1540.5 140t207 160.5 160.5 207T2011.5 752t36.5 272z'
    }
  ]
]

export default createIcon(jsx, 'FullCircleMask')
