import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 329 2048'
  },
  [
    'path',
    {
      d:
        'M329 522v344H0V522q0-52 7-106t22.5-104.5 40.5-95 61-78T215.5 86 327 67v156q-37 0-64 14.5t-46.5 38T185 330t-19.5 64-10 66.5T153 522h176z'
    }
  ]
]

export default createIcon(jsx, 'RightQuote')
