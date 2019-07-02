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
        'M1152 896h896v1152H384v-384H0V0h1152v896zM128 1536h256V896h640V128H128v1408zm1792 384v-896H512v896h1408z'
    }
  ]
]

export default createIcon(jsx, 'Layout')
