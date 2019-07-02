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
        'M1946 960l-959 960H453l-338-339q-25-25-37.5-57.5T65 1456t12.5-67.5T114 1332L1216 230zm-730-550l-678 678 550 550 678-678zM998 1728l-550-550-243 243q-13 13-13 35t14 36l300 300h427zM0 1792h128v128H0v-128zm1168 128l112-112v112h-112zm240-128h128v128h-128v-128zm256 0h128v128h-128v-128zm384 0v128h-128v-128h128z'
    }
  ]
]

export default createIcon(jsx, 'PointErase')
