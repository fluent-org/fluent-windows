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
        'M128.109 0v2048h1663.9V0h-1663.9zm127.993 128h1407.91v1792H256.102V128zM1408.03 1792h127.992v-384H1408.03v384zm0-1152h127.992V256H1408.03v384z'
    }
  ]
]

export default createIcon(jsx, 'StaplingPortraitTwoRight')
