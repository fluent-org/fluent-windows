import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1792 0v2048H128V0h1664zm-128 128H256v1792h1408V128zM659 1773l-256-256 90-90 256 256z'
    }
  ]
]

export default createIcon(jsx, 'StaplingPortraitBottomLeft')
