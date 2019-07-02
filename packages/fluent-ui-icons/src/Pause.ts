import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M640 256h128v1536H640V256zm768 0v1536h-128V256h128z'
    }
  ]
]

export default createIcon(jsx, 'Pause')
