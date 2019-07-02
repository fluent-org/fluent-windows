import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1087 128l960 1920h-143l-256-512H403l-256 512H4L964 128h123zM467 1408h1117L1025 291z'
    }
  ]
]

export default createIcon(jsx, 'FullAlpha')
