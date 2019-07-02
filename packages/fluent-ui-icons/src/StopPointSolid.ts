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
        'M1024 0q88 0 170 23t153 64.5 129.5 100 100 129.5 64.5 153 23 170q0 69-16.5 131.5T1600 896l-576 1152L448 896q-31-62-47.5-124.5T384 640q0-88 23-170t64.5-153 100-129.5T701 87.5 854 23t170-23zM896 384H768v512h128V384zm384 0h-128v512h128V384z'
    }
  ]
]

export default createIcon(jsx, 'StopPointSolid')
