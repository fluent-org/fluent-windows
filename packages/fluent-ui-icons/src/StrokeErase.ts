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
        'M1946 960l-959 960H453l-338-339q-25-25-37.5-57.5T65 1456t12.5-67.5T114 1332L1216 230zm-730-550l-678 678 550 550 678-678zM998 1728l-550-550-243 243q-13 13-13 35t14 36l300 300h427zm1050 64v128h-880l128-128h752zm-1903 0l128 128H0v-128h145z'
    }
  ]
]

export default createIcon(jsx, 'StrokeErase')
