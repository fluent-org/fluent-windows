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
        'M2048 128v1664H0V128h2048zm-128 128H128v1408h1792V256zm-256 384q-27 0-50-10t-40.5-27.5T1546 562t-10-50 10-50 27.5-40.5T1614 394t50-10 50 10 40.5 27.5T1782 462t10 50-10 50-27.5 40.5T1714 630t-50 10zm-1280 0q-27 0-50-10t-40.5-27.5T266 562t-10-50 10-50 27.5-40.5T334 394t50-10 50 10 40.5 27.5T502 462t10 50-10 50-27.5 40.5T434 630t-50 10zm640 0q-27 0-50-10t-40.5-27.5T906 562t-10-50 10-50 27.5-40.5T974 394t50-10 50 10 40.5 27.5T1142 462t10 50-10 50-27.5 40.5T1074 630t-50 10z'
    }
  ]
]

export default createIcon(jsx, 'HolePunchLandscapeTop')
