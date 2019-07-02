import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1792 0v2048H128V0h1664zm-128 128H256v1792h1408V128zM493 621l-90-90 256-256 90 90z'
    }
  ]
]

export default createIcon(jsx, 'StaplingPortraitTopLeft')
