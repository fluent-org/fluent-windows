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
        'M1664 1792v128H256v-128h1408zM473 1664H338L893 0h134l555 1664h-135l-170-512H643zm213-640h548L960 203z'
    }
  ]
]

export default createIcon(jsx, 'FontColor')
