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
        'M1088 4q96 0 185 25t167 71 142 110 110 142 71 167 25 185q0 137-52.5 264.5T1586 1193l-837 836-90-90 836-837q79-79 122-182.5t43-215.5q0-117-45.5-221T1491 301t-182-123.5-221-45.5q-108 0-190.5 32.5t-152.5 86T610.5 372 475 512h421v128H256V0h128v421q55-56 105.5-108.5t101-99 103-85 112-66 129-43T1088 4z'
    }
  ]
]

export default createIcon(jsx, 'Undo')
