import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M0 384h2048v1152H0V384zm1920 128H128v640h1792V512zM128 1408h1792v-128H128v128z'
    }
  ]
]

export default createIcon(jsx, 'DockBottom')
