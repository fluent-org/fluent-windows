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
        'M1600 1152q93 0 174.5 35t142.5 96 96 142.5 35 174.5-35 174.5-96 142.5-142.5 96-174.5 35-174.5-35-142.5-96-96-142.5-35-174.5 35-174.5 96-142.5 142.5-96 174.5-35z'
    }
  ]
]

export default createIcon(jsx, 'StatusCircle7')
