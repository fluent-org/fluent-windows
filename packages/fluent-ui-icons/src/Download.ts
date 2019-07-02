import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M384 2048v-128h1152v128H384zm1197-979l-621 626-621-626 90-90 467 470V0h128v1449l467-470z'
    }
  ]
]

export default createIcon(jsx, 'Download')
