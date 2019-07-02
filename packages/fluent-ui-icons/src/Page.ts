import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1792 549v1499H128V0h1115zm-512-37h293l-293-293v293zm384 1408V640h-512V128H256v1792h1408z'
    }
  ]
]

export default createIcon(jsx, 'Page')
