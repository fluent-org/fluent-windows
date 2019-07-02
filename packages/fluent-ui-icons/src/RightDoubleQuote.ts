import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 875 2048'
  },
  [
    'path',
    {
      d:
        'M0 66h332v343q0 51-7 105t-23 104.5-41.5 95.5-61.5 78.5-84.5 53T5 865V708q37 0 64.5-14.5t46.5-38 30.5-54.5 18-64 9-66.5T176 409H0V66zm875 0v343q0 78-16 159t-54 147-100.5 108T548 865V708q55 0 89.5-30.5t53-76 25-97.5 6.5-95H546V66h329z'
    }
  ]
]

export default createIcon(jsx, 'RightDoubleQuote')
