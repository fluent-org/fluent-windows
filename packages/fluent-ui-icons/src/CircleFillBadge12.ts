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
        'M1024 341q94 0 181.5 24.5t163.5 69T1507 541t106.5 138 69 163.5T1707 1024t-24.5 181.5-69 163.5-106.5 138-138 106.5-163.5 69T1024 1707t-181.5-24.5-163.5-69T541 1507t-106.5-138-69-163.5T341 1024t24.5-181.5 69-163.5T541 541t138-106.5 163.5-69T1024 341z'
    }
  ]
]

export default createIcon(jsx, 'CircleFillBadge12')
