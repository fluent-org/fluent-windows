import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1920 128v1792H128V128h1792zm-128 128H256v1536h1536V256z'
    }
  ]
]

export default createIcon(jsx, 'Stop')
