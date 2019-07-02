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
        'M1760 128q-93 0-162 36t-122.5 96-96 137-83.5 158-85.5 160.5-101 144.5T980 968.5 807 1022l513 1026h-144L664 1024h-86L322 2048H190L702 0h132L610 896h158q84 0 147-38.5T1029 756t94-143.5 86.5-164.5 91.5-164.5T1409.5 140t138-101.5T1728 0h32v128z'
    }
  ]
]

export default createIcon(jsx, 'ItalicRussian')
