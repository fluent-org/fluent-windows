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
        'M32 1024q0-137 35.5-264t100-237 155-200.5 200.5-155 237-100T1024 32t264 35.5 237 100 200.5 155 155 200.5 100 237 35.5 264-35.5 264-100 237-155 200.5-200.5 155-237 100-264 35.5-264-35.5-237-100-200.5-155-155-200.5-100-237T32 1024z'
    }
  ]
]

export default createIcon(jsx, 'CircleFill')
