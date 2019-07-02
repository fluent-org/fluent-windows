import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d:
        'M1088 1664q0 27-10 50t-27.5 40.5-40.5 27.5-50 10-50-10-40.5-27.5T842 1714t-10-50 10-50 27.5-40.5T910 1546t50-10 50 10 40.5 27.5 27.5 40.5 10 50zm0-1408q0 27-10 50t-27.5 40.5T1010 374t-50 10-50-10-40.5-27.5T842 306t-10-50 10-50 27.5-40.5T910 138t50-10 50 10 40.5 27.5T1078 206t10 50zm832 768H0V896h1920v128z'
    }
  ]
]

export default createIcon(jsx, 'CalculatorDivide')
