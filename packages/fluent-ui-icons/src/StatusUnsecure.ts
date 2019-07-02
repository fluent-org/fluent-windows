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
        'M447 2q50 0 91 11t83 36q32 19 65.5 28.5t68 13.5 70 4.5 71.5.5v261q0 99-39 187.5T755 708 611.5 842 448 941q-83-40-163.5-99T141 708 39 544.5 0 357V96q37 0 72.5-.5t70-4.5 68-14T277 48q42-24 82-35t88-11zm65 638H384v128h128V640zm0-512H384v384h128V128z'
    }
  ]
]

export default createIcon(jsx, 'StatusUnsecure')
