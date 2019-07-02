import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d: 'M1105 128l640 1920h-135l-171-512H615l-170 512H310L950 128h155zM658 1408h739L1027 300z'
    }
  ]
]

export default createIcon(jsx, 'HalfAlpha')
