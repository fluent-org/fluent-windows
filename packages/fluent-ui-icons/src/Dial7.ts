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
        'M1516 173v60q-103 188-197.5 369t-173 367-137.5 381-92 410H766q30-190 88-379.5t135-374 167.5-362T1342 301H527V173h989z'
    }
  ]
]

export default createIcon(jsx, 'Dial7')
