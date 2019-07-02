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
        'M1946 1792L1178.047 256 410.094 1792h1535.91zm-206.99-128H617.08l560.966-1122zM365.097 211L.119 576l364.978 365 89.994-90-209.987-211h548.967V512H245.104l209.987-211z'
    }
  ]
]

export default createIcon(jsx, 'CallForwardRoamingMirrored')
