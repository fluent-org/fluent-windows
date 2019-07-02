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
        'M2048 128v1664H0V128h2048zm-128 128h-128v128h128V256zm-256 1152V512H384v896h1280zM384 1536v128h1280v-128H384zM256 512H128v896h128V512zm1408-128V256H384v128h1280zm128 1024h128V512h-128v896zM128 256v128h128V256H128zm0 1408h128v-128H128v128zm1792 0v-128h-128v128h128z'
    }
  ]
]

export default createIcon(jsx, 'PageMarginLandscapeNarrow')
