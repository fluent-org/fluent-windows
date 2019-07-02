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
        'M1024 0q141 0 272 36.5t245 103 207.5 160 160 207.5 103 245 36.5 272-36.5 272-103 245-160 207.5-207.5 160-245 103-272 36.5-272-36.5-245-103-207.5-160-160-207.5-103-244.5T0 1024q0-141 36.5-272t103-245 160-207.5 207.5-160 244.5-103T1024 0z'
    }
  ]
]

export default createIcon(jsx, 'PaginationDotSolid10')
