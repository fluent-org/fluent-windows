import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 332 2048'
  },
  [
    'path',
    {
      d:
        'M332 66v343q0 51-7 105t-23 104.5-41.5 95.5-61.5 78.5-84.5 53T5 865V708q37 0 64.5-14.5t46.5-38 30.5-54.5 18-64 9-66.5T176 409H0V66h332z'
    }
  ]
]

export default createIcon(jsx, 'LeftQuote')
