import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M256 1792V256h128v1536H256zm448-768l1088-768v1536zm960 521V503l-738 521z'
    }
  ]
]

export default createIcon(jsx, 'Previous')
