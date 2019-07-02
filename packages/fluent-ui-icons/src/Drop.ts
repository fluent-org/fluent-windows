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
        'M1606 1166q58 114 58 242 0 88-23 170t-64.5 153-100 129.5-129.5 100-153 64.5-170 23-170-23-153-64.5-129.5-100-100-129.5-64.5-153-23-170q0-127 56-241L1019 0z'
    }
  ]
]

export default createIcon(jsx, 'Drop')
