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
        'M2048 128v1664H0V128h2048zm-128 128H128v1408h1792V256zM384 640q-27 0-50-10t-40.5-27.5T266 562t-10-50 10-50 27.5-40.5T334 394t50-10 50 10 40.5 27.5T502 462t10 50-10 50-27.5 40.5T434 630t-50 10zm0 896q-27 0-50-10t-40.5-27.5T266 1458t-10-50 10-50 27.5-40.5T334 1290t50-10 50 10 40.5 27.5T502 1358t10 50-10 50-27.5 40.5T434 1526t-50 10z'
    }
  ]
]

export default createIcon(jsx, 'HolePunchLandscapeLeft')
