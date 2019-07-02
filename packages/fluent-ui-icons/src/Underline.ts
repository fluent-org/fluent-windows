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
        'M1664 0v1152q0 133-50 249.5T1477 1605t-203.5 137-249.5 50-249.5-50T571 1605t-137-203.5-50-249.5V0h128v1152q0 106 40.5 199t110 162.5 162.5 110 199 40.5 199-40.5 162.5-110 110-162.5 40.5-199V0h128zM384 1920h1280v128H384v-128z'
    }
  ]
]

export default createIcon(jsx, 'Underline')
