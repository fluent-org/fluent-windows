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
        'M1047 1982q0 26-17.5 46t-44.5 20q-31 0-46-17t-20-45q-3-20-3-43t-4-43v-180q-5-212-10.5-422T896 876q0-143 5-283.5t5-283.5V63q4-28 19.5-45.5T971 0q27 0 45 19.5t18 45.5q0 204-5 405t-5 405q0 212 5.5 421t10.5 421q2 66 4.5 132.5t2.5 132.5z'
    }
  ]
]

export default createIcon(jsx, 'HWPSplit')
