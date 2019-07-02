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
        'M1277 1475l-317-317-317 317 90 90 163-163v646h128v-646l163 163zm515-451H128V0h1664v1024zM256 896h1408V128H256v768z'
    }
  ]
]

export default createIcon(jsx, 'SetlockScreen')
