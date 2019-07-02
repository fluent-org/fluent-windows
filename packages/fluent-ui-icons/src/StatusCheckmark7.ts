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
        'M1792 1408q26 0 45 19t19 45-19 45l-256 256q-19 19-45 19t-45-19l-128-128q-19-19-19-45t19-45 45-19 45 19l83 83 211-211q19-19 45-19z'
    }
  ]
]

export default createIcon(jsx, 'StatusCheckmark7')
