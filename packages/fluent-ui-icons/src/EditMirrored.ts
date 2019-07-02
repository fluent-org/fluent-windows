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
        'M.125 335q0 66 24.998 128 24.999 62 72.996 110l1316.92 1317L2048 2048l-157.99-633L573.09 98q-47.997-48-109.993-73T335.105 0Q266.11 0 205.113 26.5T98.62 98.5 26.624 205Q.126 266 .126 335zM1722.02 1428q-105.993 35-182.488 111.5T1428.039 1722L347.109 640l292.982-293zm149.99 444l-328.979-82q9.999-46 32.498-87 22.498-41 54.496-73t72.996-54.5q40.997-22.5 86.994-32.5zM256.109 549q-24.998-25-47.997-47t-40.997-46.5q-18-24.5-28.5-53-10.498-28.5-10.498-66.5 0-43 16.499-80.5t44.997-66 65.996-45 80.495-16.5q37.998 0 66.496 10.5t52.997 28.5q24.498 18 46.497 41 21.998 23 46.997 48z'
    }
  ]
]

export default createIcon(jsx, 'EditMirrored')
