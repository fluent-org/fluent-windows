import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M0 0h2048v1664h-640l-384 384-384-384H0V0zm1920 1536V128H128v1408h565l331 331 331-331h565z'
    }
  ]
]

export default createIcon(jsx, 'ActionCenter')
