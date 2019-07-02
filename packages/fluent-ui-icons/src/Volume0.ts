import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M677 256h91v1536h-90l-385-384H0V640h293zm-37 1317V475L347 768H128v512h219z'
    }
  ]
]

export default createIcon(jsx, 'Volume0')
