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
        'M1031 0q143 0 274 36.5t244 103T1754 300t157.5 208 101 245 35.5 273q0 140-36.5 270T1909 1539.5 1750 1747t-206 160.5-243 103.5-270 37-271-36.5T514.5 1908t-209-160.5-162.5-207T37.5 1297 0 1026q0-143 37-274.5T141 506t161-207 208.5-159.5 246-103T1031 0z'
    }
  ]
]

export default createIcon(jsx, 'ToggleThumb')
