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
        'M.125 128v1664h2047.88V128H.125zm127.992 128h1791.89v1408H128.117V256zM1664.02 640q26.998 0 49.997-10 22.998-10 40.497-27.5t27.5-40.5q9.998-23 9.998-50t-9.999-50q-10-23-27.499-40.5t-40.497-27.5q-22.999-10-49.997-10t-49.997 10q-22.998 10-40.497 27.5t-27.5 40.5q-9.998 23-9.998 50t9.999 50q10 23 27.499 40.5t40.497 27.5q22.999 10 49.997 10zm0 896q26.998 0 49.997-10 22.998-10 40.497-27.5t27.5-40.5q9.998-23 9.998-50t-9.999-50q-10-23-27.499-40.5t-40.497-27.5q-22.999-10-49.997-10t-49.997 10q-22.998 10-40.497 27.5t-27.5 40.5q-9.998 23-9.998 50t9.999 50q10 23 27.499 40.5t40.497 27.5q22.999 10 49.997 10z'
    }
  ]
]

export default createIcon(jsx, 'HolePunchLandscapeRight')
