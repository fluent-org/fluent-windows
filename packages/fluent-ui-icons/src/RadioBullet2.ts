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
        'M1024 352q93 0 178.5 24t160.5 68 136 105 105 136 68 160.5 24 178.5-24 178.5-68 160.5-105 136-136 105-160.5 68-178.5 24-178.5-24-160.5-68-136-105-105-136-68-160.5-24-178.5 24-178.5T444 685t105-136 136-105 160.5-68 178.5-24z'
    }
  ]
]

export default createIcon(jsx, 'RadioBullet2')
